import React from "react";
import { Text, View, StyleSheet, FlatList, Image } from "react-native";

const FacultyListScreen = () => {
    const faculty_list = [
      { name: "Professor Dr Muhammad Mahbub Alam", key: '1'},
      { name: "Dr Md. Abdul Hakim Khan", key: '2'},
      { name: "Mr Mohayeminul Islam", key: '3'},
      { name: "Faisal Hussain", key: '4'},
      { name: "Tajkia Rahman Toma", key: '5'},
    ];
    return (
        <View style={styles.container}>
          <Image
          style = {styles.imageStyle}
          source = {require("./../../assets/faculty3.png")}/>  
          <Text style={styles.textStyle2}>The list of Faculties: </Text>
          <Text> </Text>
          <FlatList
            style={styles.ListStyle}
            data={faculty_list}
            renderItem={function ({ item }) {
              //there is an error "Text strings must be rendered within a <Text> component"
              return <Text style={styles.textStyle}><Text style={styles.textStyle3}>{item.key}.</Text>{item.name}</Text>;
            }}
          />
        </View>
      );
    };

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
    textStyle: {
        fontSize: 20,
        color: "#4C0099",
        marginVertical: 10,
        },
    textStyle2: {
        fontSize: 35,
        fontStyle: "italic",
        fontWeight: "bold",
        textDecorationLine: "underline",
        color: "#000080",
        textAlign: "center",
        },
    ListStyle: {

    },
    imageStyle: {
      width: 130,
      height: 215,
      alignSelf: "center",    
    },
    textStyle3: {
      fontSize: 25,
      color: "#FFFFFF",
      fontWeight: "bold",
      backgroundColor: "#CC00CC",

      },

    });
      
export default FacultyListScreen;
      