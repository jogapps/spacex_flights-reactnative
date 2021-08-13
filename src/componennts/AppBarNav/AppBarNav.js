import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { kAppTextColor } from "../../constants/colors";
import { kAppStatusBarHeight } from "../../constants/dimensions";

const AppBarNav = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
        marginBottom: 10,
        marginTop: 10 + kAppStatusBarHeight
    },
    title: {
        color: kAppTextColor,
        fontSize: 20,
        fontFamily: "Roboto-Bold"
    },
});

export default AppBarNav;