import { useState } from "react";
import { Alert } from "react-native";
import { TextInput } from "react-native";
import { View, Text, ScrollView } from "react-native";
import { StyleSheet } from "react-native";

export function Login({ navigation, route }) {
  const [text, setText] = useState();

  return (
    <View style={styles.container}>
      {/* <TextInput
        style={styles.input}
        placeholder="digite alguma coisa aqui"
        secureTextEntry={true}
        onChangeText={(text) => {
          setText(text);
        }}
        keyboardAppearance="dark"
        keyboardType="default"
        onSubmitEditing={() => {
          Alert.alert("TESTE");
        }}
      />
      <Text>{text}</Text> */}
      <View style={styles.container1}></View>
      <View style={styles.container2}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
  },
  container1: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "red",
    height: 50,
  },
  input: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "black",
  },
});
