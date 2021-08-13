import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppBarNav from "../../componennts/AppBarNav/AppBarNav";
import AppSpacer from "../../componennts/AppSpacer/AppSpacer";
import AppStatusBar from "../../componennts/AppStatusBar/AppStatusBar";
import TransactionCard from "../../componennts/TransactionCard/TransactionCard";
import { kAppWhiteColor2 } from "../../constants/colors";

const HistoryId = "History";
const History = (props) => {
    return (
        <View style={styles.container}>
            <AppStatusBar />
            <AppBarNav title="Transaction History" />
            <View style={styles.container2}>
            <AppSpacer height={30} />
            <TransactionCard wallet/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        flex: 1,
        backgroundColor: kAppWhiteColor2
    },
    container2: {
        width: "90%",
        marginHorizontal: 20
    }
});

export default History;
export {HistoryId};