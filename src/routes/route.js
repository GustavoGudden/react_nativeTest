import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../view/Home";
import { Login } from "../view/Login";

export function AppRoutes() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="inicio"
          component={Home}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="loginPage"
          component={Login}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
