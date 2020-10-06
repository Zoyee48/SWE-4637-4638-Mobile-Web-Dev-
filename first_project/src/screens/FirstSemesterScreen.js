import React from "react";
import {Text, View, StyleSheet, FlatList} from "react-native";

const FirstSemesterScreen = () => {
    const course_list = [
      { name: " Islamiat", key: 'Hum 4145'},
      { name: " Technology, Environment and Society", key: 'Hum 4147'},
      { name: " Geometry and Differential Calculus", key: 'Math 4141'},
      { name: " Physics II", key: 'Phy 4143'},
      { name: " Structured Programming I", key: 'CSE 4107'},
      { name: " Physics II Lab", key: 'Phy 4144'},
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

export default FirstSemesterScreen;