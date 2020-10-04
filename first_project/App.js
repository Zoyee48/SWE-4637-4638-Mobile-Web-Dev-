import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//import HomeScreen from "./src/screens/HomeScreen";
import anotherScreen from "./src/screens/anotherScreen";
const stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen name="Home" component={anotherScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
