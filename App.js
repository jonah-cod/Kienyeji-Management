import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginForm from "./components/loginForm";
import SignupForm from "./components/signupForm";
import Home from "./components/Home";
import Menu from "./components/Menu";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer >
        <Stack.Navigator initialRouteName="home" screenOptions={{headerShown: false}}>
          <Stack.Screen name="home" component={Home}/>

          <Stack.Screen name="login" component={LoginForm} options={{title: 'Login'}} h/>

          <Stack.Screen name="signup" component={SignupForm} options={{title: 'Sign Up'}}/>
          
        </Stack.Navigator>

        <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
