import { StatusBar } from "expo-status-bar";
import { Pressable } from "react-native";
import { StyleSheet, Text, View, Button } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

export function Home({ navigation, route }) {
  const handlenavigate = () => {
    navigation.navigate("loginPage", { user: "gustavo" });
  };

  const width = useSharedValue(40);
  const height = useSharedValue(40);

  const handlePressIn = () => {
    height.value = withSpring(20);
    width.value = withSpring(20);
  };

  const handlePressOut = () => {
    height.value = withSpring(80);
    width.value = withSpring(80);
  };

  const animatedStyles = useAnimatedStyle(() => {
    return {
      width: width.value,
      height: height.value,
    };
  });

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Animated.View style={[styles.box, animatedStyles]} />
      <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}>
        <Text>move</Text>
      </Pressable>
    </View>
  );
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
    height: 50,
  },
  box: {
    height: 40,
    width: 40,
    backgroundColor: "blue",
    borderRadius: 8,
  },
});
