import React from "react";
import {Text, View, StyleSheet, FlatList} from "react-native";

const SecondSemesterScreen = () => {
    const course_list = [
      { name: " Accounting ", key: 'Hum 4247'},
      { name: " Business Psychology and Communications ", key: 'Hum 4249'},
      { name: " Discrete Mathematics ", key: 'CSE 4203'},
      { name: " Object Oriented Concepts I", key: 'SWE 4201'},
      { name: " Digital Logic Design", key: 'CSE 4205'},
      { name: " Digital Logic Design Lab", key: 'CSE 4206'},
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
          color: "#CC00CC",
          fontWeight: "bold",
        }
    });

export default SecondSemesterScreen;