import React from 'react';
import {Text, StyleSheet, View, Image, Button} from "react-native";

const SemesterScreen = (props) => {
    //console.log(props);
    return (
      <View style = {styles.container}>
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
            //props.navigation.navigate("Semesters");
            console.log("Button Pressed3");
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
  });

  export default SemesterScreen;