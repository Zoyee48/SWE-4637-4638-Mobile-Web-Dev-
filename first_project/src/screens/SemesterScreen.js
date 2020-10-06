import React from 'react';
import {Text, StyleSheet, View, Image, Button} from "react-native";

const SemesterScreen = (props) => {
    //console.log(props);
    return (
      <View style = {styles.container}>
        <Image
        style = {styles.imageStyle}
        source = {require("./../../assets/semester.png")}/>  
        <Text>  </Text>
        <Text style={styles.textStyle2}>List of Semesters:</Text>
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
      paddingTop: 20,
      marginLeft: 50,
      marginRight: 50,
      alignContent: "center",
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
      textDecorationLine: "underline",
      color: "#000080",
      textAlign: "center",
      },
      imageStyle: {
        width: 170,
        height: 230,
        alignSelf: "center",    
      },
  });

  export default SemesterScreen;