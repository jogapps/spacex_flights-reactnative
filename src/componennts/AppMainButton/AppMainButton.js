import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, ActivityIndicator } from "react-native";
import { kAppPrimaryColor, kAppWhiteColor } from "../../constants/colors";
import { kAppWidth } from "../../constants/dimensions";


const AppMainButton = (props) => {

    return (
        !props.loading
            ? <TouchableOpacity onPress={props.onPress}>
                <View style={{
                    backgroundColor: kAppPrimaryColor,
                    borderRadius: 10,
                    width: props.width ? kAppWidth * props.width : kAppWidth,
                    height: 50,
                }}>
                    <Text style={styles.buttonText}>{props.text}</Text>
                </View>
            </TouchableOpacity>
            : <View style={{
                backgroundColor: kAppPrimaryColor,
                borderRadius: 10,
                width: props.width ? kAppWidth * props.width : kAppWidth,
                height: 50,
            }}>
                <Text style={styles.buttonText}>loading...</Text>
            </View>
    );
}

const styles = StyleSheet.create({
    buttonText: {
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "auto",
        marginTop: "auto",
        color: kAppWhiteColor,
        fontFamily: "Roboto-Bold",
    }
});

export default AppMainButton;