import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { kAppTextColor, kAppTextFieldColor, kAppWhiteColor } from "../../constants/colors";
import { kAppHeight } from "../../constants/dimensions";
import AppSpacer from "../AppSpacer/AppSpacer";

const AppDropdown = (props) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ]);

    return (
        <View>
            <Text style={styles.category}>{props.title}</Text>
            <AppSpacer height={10}/>
            <DropDownPicker
                style={styles.dropdownContainer}
                dropDownContainerStyle={ styles.dropdownItemContainer }
                labelStyle={{color: kAppTextColor}}
                open={props.open}
                value={props.value}
                items={props.items}
                setOpen={props.setOpen}
                setValue={props.setValue}
                setItems={props.setItems}
                {...props}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    dropdownContainer: {
        elevation: 2,
        backgroundColor: kAppWhiteColor,
        borderColor: kAppTextFieldColor,
    },
    dropdownItemContainer: {
        borderColor: kAppTextFieldColor,
        flex:1,
        zIndex: 1000, 
        elevation: 1000
    },
    category: {
        fontSize: 14,
        //fontFamily: "Roboto-Medium",
        color: kAppTextColor
    },
});

export default AppDropdown;