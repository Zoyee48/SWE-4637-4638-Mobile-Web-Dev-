import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import FacultyListScreen from "./src/screens/FacultyListScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import SemesterScreen from "./src/screens/SemesterScreen";
import FirstSemesterScreen from "./src/screens/FirstSemesterScreen";
const stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen name="Home" component={HomeScreen} />
        <stack.Screen name="Faculty List" component={FacultyListScreen} />
        <stack.Screen name="My Profile" component={ProfileScreen} />
        <stack.Screen name="Semesters" component={SemesterScreen} />
        <stack.Screen name="First Semester" component={FirstSemesterScreen} />

      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
