import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  //console.log(props);
  return (
    <View>
      <Text style={styles.textStyle}>Department Of CSE</Text>
      <Text style={styles.textStyle}>Programme: SWE</Text>
      <TouchableOpacity>
      <Button
        title="My Profile"
        onPress={function () {
          props.navigation.navigate("List");
          console.log("Button Pressed");
        }}
      />
      </TouchableOpacity>

       <Button
        title="Semester Wise Course List"
        onPress={function () {
          console.log("Button Pressed");
        }}
      />
      <Button
        title="List of Faculty Members"
        onPress={function () {
          console.log("Button Pressed 2");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "blue",
  },
});

export default HomeScreen;