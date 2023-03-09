import { View, Text } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";

export default function RandomInfo(props: any) {
  const [astName, setAstName] = useState("");
  const [astUrl, setAstUrl] = useState("");
  const [astIsHaz, setAstIsHazard] = useState("");
  useEffect(() => {
    const handleSubmit = async () => {
      let url = "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY";
      console.log("URL-->" + url);
      let ans = await axios.get(url);
      let numTemp = ans.data.near_earth_objects.length;

      let num = Number(numTemp);
      let random = Math.floor(Math.random() * (num + 1));
      console.log(ans.data.near_earth_objects[random].name);

      setAstName(ans.data.near_earth_objects[random].name);
      setAstUrl(ans.data.near_earth_objects[random].nasa_jpl_url);
      setAstIsHazard(
        String(
          ans.data.near_earth_objects[random].is_potentially_hazardous_asteroid
        )
      );
    };
    handleSubmit();
  }, []);
  return (
    <View>
      <Text>Asteriod Name:{astName}</Text>
      <Text>Asteriod URL:{astUrl}</Text>
      <Text>Is Asteriod Hazardous :{astIsHaz}</Text>
    </View>
  );
}
