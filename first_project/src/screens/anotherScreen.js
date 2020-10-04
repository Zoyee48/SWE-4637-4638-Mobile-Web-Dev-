import React from "react";
import { Text, StyleSheet} from "react-native";

const anotherScreen=()=>
{
    return (<Text style={styles.textStyle}> Test </Text>);
}

const styles = StyleSheet.create(
    {
        textStyle:{
            fontSize: 30,
            color: 'blue',
        },

    }
);

export default anotherScreen;   