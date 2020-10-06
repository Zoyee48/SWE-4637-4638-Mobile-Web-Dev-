import React from "react";
import {Text, View, StyleSheet, FlatList} from "react-native";

const ThirdSemesterScreen = () => {
    const course_list = [
      { name: " Linear Algebra", key: 'Math 4341'},
      { name: " Data Structures", key: 'CSE 4303'},
      { name: " Computer Organization and Architecture", key: 'CSE 4305'},
      { name: " Database Management System ", key: 'CSE 4307'},
      { name: " Theory of Computing ", key: 'CSE 4309'},
      { name: " Data Structures Lab ", key: 'CSE 4304 '},
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
              return <Text style={styles.textStyle}><Text style={styles.textStyle3}>{item.key}.</Text>{item.name}</Text>;
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
        color: "#4C0099",
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
        textStyle3: {
          fontSize: 25,
          color: "#FFFFFF",
          fontWeight: "bold",
          backgroundColor: "#CC00CC",
        }
    });

export default ThirdSemesterScreen;