import React from "react";
import {Text, View, StyleSheet, FlatList} from "react-native";

const SecondSemesterScreen = () => {
    const course_list = [
      { name: "1: Accounting "},
      { name: "2: Business Psychology and Communications "},
      { name: "3: Discrete Mathematics "},
      { name: "4: Object Oriented Concepts I"},
      { name: "5: Digital Logic Design"},
      { name: "6: Digital Logic Design Lab"},
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

export default SecondSemesterScreen;