import React from 'react';
import {Text, StyleSheet, View, Image, Button} from "react-native";

const SemesterScreen = (props) => {
    //console.log(props);
    return (
      <View style = {styles.container}>
        <Text style={styles.textStyle2}>List of Semesters: </Text>
        <Text> </Text>
        <Button
          title="1st Semester"
          onPress={function () {
            props.navigation.navigate("First Semester");
            //console.log("Button Pressed");
          }}
        />
  
        <Text style={styles.textStyle}></Text>
  
        <Button
          title="2nd Semester"
          onPress={function () {
            props.navigation.navigate("Second Semester");
            
          }}
        />

        <Text style={styles.textStyle}></Text>

        <Button
          title="3rd Semester"
          onPress={function () {
            props.navigation.navigate("Third Semester");
            
          }}
        />


      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      paddingTop: 30,
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
  });

  export default SemesterScreen;