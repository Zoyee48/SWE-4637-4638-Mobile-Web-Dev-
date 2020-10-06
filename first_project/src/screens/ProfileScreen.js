import React from 'react';
import {Text, StyleSheet, View, Image} from "react-native";

const ProfileScreen = () => {
    //console.log(props);
    return (
    <View style = {styles.container}>
      <Text style = {styles.textStyle2}>My Profile</Text>
      <Image
        style = {styles.imageStyle}
        source = {require("./../../assets/profile.jpeg")}/>
        <Text>   </Text>
        <Text>   </Text>
        <Text style={styles.textStyle}>Name: Maliha Mehzabin Zoyee</Text>
        <Text style={styles.textStyle}>Student ID: 170042048</Text>
        <Text style={styles.textStyle}>Room: 404, UTB(FHR)</Text>
        <Text style={styles.textStyle}>Email: malihamehzabin@iut-dhaka.edu</Text>
    </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
    textStyle: {
      fontSize: 25,
      color: "#4C0099",
      textAlign: "left",
      backgroundColor: "#E5CCFF",
    },
    textStyle2: {
      fontSize: 35,
      fontStyle: "italic",
      fontWeight: "bold",
      color: "#000080",
      textAlign: "center",
      },
    imageStyle: {
      width: 200,
      height: 250,
      alignSelf: "center",
    },
  });
  
export default ProfileScreen;