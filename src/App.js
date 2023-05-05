import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Pressable } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { AppRoutes } from "./routes/route";

export default function App() {
  return <AppRoutes />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "red",
  },
});
