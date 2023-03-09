import { StyleSheet, View, Button, TextInput } from "react-native";
import { useState } from "react";

const Home = (props: any) => {
  type aid = {
    id: string;
  };
  type cid = {
    result: string;
  };
  const [id, setId] = useState("");

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          placeholder="Enter Asteroid"
          onChangeText={(id) => setId(id)}
        />

        <Button
          title="Submit"
          onPress={() => props.navigation.navigate("Info", { Id: id })}
          disabled={id.length < 1}
        />
        <Button
          title="Random Asteriod"
          onPress={() => props.navigation.navigate("RandomInfo")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
