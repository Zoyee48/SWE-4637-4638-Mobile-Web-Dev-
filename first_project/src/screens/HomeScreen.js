import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, Image} from "react-native";

const HomeScreen = (props) => {
  //console.log(props);
  return (
    <View style = {styles.container}>

      <Image
        style = {styles.imageStyle}
        source = {require("./../../assets/logo.png")}/>        
      <Text style={styles.textStyle2}>Department Of CSE</Text>
      <Text style={styles.textStyle2}>Programme: SWE</Text>
      <Text style={styles.textStyle}></Text>
      <TouchableOpacity>
      <Button 
        title="My Profile"
        onPress={function () {
          props.navigation.navigate("My Profile");
          //console.log("Button Pressed");
        }}
      />
      </TouchableOpacity>

      <Text style={styles.textStyle}></Text>

      <Button
        title="Semester Wise Course List"
        onPress={function () {
          props.navigation.navigate("Semesters");
          //console.log("Button Pressed");
        }}
      />

      <Text style={styles.textStyle}></Text>

      <Button
        title="List of Faculty Members"
        onPress={function () {
          props.navigation.navigate("Faculty List");
          //console.log("Button Pressed");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  textStyle: {
    fontSize: 30,
    color: "blue",
    textAlign: "center",
  },
  textStyle2: {
    fontSize: 35,
    fontStyle: "italic",
    fontWeight: "bold",
    color: "#000080",
    textAlign: "center",
    },
  imageStyle: {
    width: 130,
    height: 215,
    alignSelf: "center",    
  }
});

export default HomeScreen;