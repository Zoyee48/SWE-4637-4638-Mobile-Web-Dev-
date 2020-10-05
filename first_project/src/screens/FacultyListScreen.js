import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const FacultyListScreen = () => {
    const faculty_list = [
      { name: "1> Professor Dr Muhammad Mahbub Alam"},
      { name: "2> Dr Md. Abdul Hakim Khan"},
      { name: "3> Mr Mohayeminul Islam"},
      { name: "4> Faisal Hussain"},
      { name: "5> Tajkia Rahman Toma"},
    ];
    return (
        <View style={styles.container}>
          <Text style={styles.textStyle2}>The list of Faculties: </Text>
          <Text> </Text>
          <FlatList
            style={styles.ListStyle}
            data={faculty_list}
            renderItem={function ({ item }) {
              //there is an error "Text strings must be rendered within a <Text> component"
              return <Text style={styles.textStyle}>{item.name}</Text>;
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
        fontSize: 20,
        color: "#0000FF",
        marginVertical: 10,
        },
    viewStyle: {
        borderColor: "#CCE5FF",
        borderWidth: 5,
        },
    textStyle2: {
        fontSize: 35,
        fontStyle: "italic",
        fontWeight: "bold",
        textDecorationLine: "underline",
        color: "#000080",
        textAlign: "center",
        },
        ListStyle: {},
    });
      
export default FacultyListScreen;
      