import React from "react";
import {Text, View, StyleSheet, FlatList} from "react-native";

const ThirdSemesterScreen = () => {
    const course_list = [
      { name: "1: Linear Algebra"},
      { name: "2: Data Structures"},
      { name: "3: Computer Organization and Architecture"},
      { name: "4: Database Management System "},
      { name: "5: Theory of Computing "},
      { name: "6: Data Structures Lab "},
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
        fontSize: 40,
        fontStyle: "italic",
        fontWeight: "bold",
        textDecorationLine: "underline",
        color: "#000080",
        textAlign: "center",
        },
    });

export default ThirdSemesterScreen;