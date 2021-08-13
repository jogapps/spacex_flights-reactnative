import React from "react";
import { View } from "react-native";

const Row = (props) => {
    return (
        <View style={[{flexDirection: "row"}, props.style]}>{props.children}</View>
    );
}

export default Row;