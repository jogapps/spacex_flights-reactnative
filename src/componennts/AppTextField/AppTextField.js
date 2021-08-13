import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { kAppBlackColor, kAppLightBlack, kAppTextColor, kAppTextFieldColor, kAppWalletDesc, kAppWhiteColor } from "../../constants/colors";
import AppSpacer from "../AppSpacer/AppSpacer";

const AppTextField = (props) => {
    return (
        <View style={{ width: "100%" }}>
            <Text style={styles.formDesc}>{props.title}</Text>
            <AppSpacer height={7.5} />
            <View style={styles.formContainer}>
                <Icon name="ios-cash-outline" size={25} color={kAppLightBlack} style={styles.icon} />
                <TextInput
                    style={styles.textInput}
                    selectionColor={kAppTextColor}
                    underlineColorAndroid="transparent"
                    value={props.value}
                    onChangeText={props.onChangeText}
                    {...props} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    formContainer: {
        width: "100%",
        height: 55,
        flexDirection: "row",
        paddingRight: 5,
        borderRadius: 10,
        backgroundColor: kAppWhiteColor,
        elevation: 2
    },
    formDesc: {
        color: kAppLightBlack,
        fontFamily: "Roboto-Regular",
    },
    icon: {
        alignSelf: "center",
        marginHorizontal: 10,
    },
    textInput: {
        width: "85%",
        color: kAppBlackColor,
        paddingRight: 10
    }
});

export default AppTextField;