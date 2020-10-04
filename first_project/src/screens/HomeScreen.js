import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, Image} from "react-native";

const HomeScreen = (props) => {
  //console.log(props);
  return (
    <View>

      <Image source = {require("./../../assets/icon.png")}>
        
      </Image>
      <Text style={styles.textStyle}>Department Of CSE</Text>
      <Text style={styles.textStyle}>Programme: SWE</Text>
      <Text style={styles.textStyle}></Text>
      <TouchableOpacity>
      <Button
        title="My Profile"
        onPress={function () {
          props.navigation.navigate("List");
          console.log("Button Pressed");
        }}
      />
      </TouchableOpacity>

      <Text style={styles.textStyle}></Text>

      <Button
        title="Semester Wise Course List"
        onPress={function () {
          console.log("Button Pressed");
        }}
      />

      <Text style={styles.textStyle}></Text>

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
    textAlign: "center",
  },
});

export default HomeScreen;