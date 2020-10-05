import React from "react";
import {Text, View, StyleSheet, FlatList} from "react-native";

const FirstSemesterScreen = () => {
    const course_list = [
      { name: "1: Islamiat"},
      { name: "2: Technology, Environment and Society"},
      { name: "3: Geometry and Differential Calculus"},
      { name: "4: Physics II"},
      { name: "5: Structured Programming I"},
      { name: "6: Physics II Lab"},
    ];
    return (
        <View style={styles.container}>
          <Text style={styles.textStyle2}>The list of Courses: </Text>
          <Text> </Text>
          <FlatList
            style={styles.ListStyle}
            data={course_list}
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
        fontSize: 25,
        color: "blue",
        textAlign: "left",
      },
      textStyle2: {
        fontSize: 35,
        fontStyle: "italic",
        fontWeight: "bold",
        textDecorationLine: "underline",
        color: "#000080",
        textAlign: "center",
        },
    });

export default FirstSemesterScreen;