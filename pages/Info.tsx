import { View, Text } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Info(props: any) {
  let data = props.route.params.Id;
  const [astName, setAstName] = useState("");
  const [astUrl, setAstUrl] = useState("");
  const [astIsHaz, setAstIsHazard] = useState("");
  useEffect(() => {
    const handleSubmit = async (id: string) => {
      let url = `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=OWgrkDB2wOXmM4e8Eeg4meuK1hJRvYP6F1bSbwhN`;
      console.log("URL-->" + url);
      let ans = await axios.get(url);
      if (ans.data == null) {
        return;
      }

      setAstName(ans.data.name);
      setAstUrl(ans.data.nasa_jpl_url);
      setAstIsHazard(String(ans.data.is_potentially_hazardous_asteroid));
    };
    handleSubmit(data);
  }, []);

  return (
    <View>
      {astName ? (
        <View>
          <Text>Asteriod Name:{astName}</Text>

          <Text>Asteriod URL:{astUrl}</Text>

          <Text>Is Asteriod Hazardous :{astIsHaz}</Text>
        </View>
      ) : (
        <Text>Not Found! Please Try Again</Text>
      )}
    </View>
  );
}
