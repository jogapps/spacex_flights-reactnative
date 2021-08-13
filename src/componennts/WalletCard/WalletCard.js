import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { kAppWalletAmount, kAppWalletDesc, kAppWalletDesc2, kAppWhiteColor, kAppWhiteColor2 } from "../../constants/colors";
import AppSpacer from "../AppSpacer/AppSpacer";
import Row from "../Row/Row";

const WalletCard = (props) => {
    return (
        <View style={styles.container}>
            <Row>
            <Text style={styles.available}>Available</Text>
            <AppSpacer width={10}/>
            <Text style={[styles.available, {color: kAppWalletDesc2}]}>Balance</Text>
            </Row>
            <AppSpacer height={5}/>
            <Row style={styles.currencyRow}>
                <Text style={styles.currency}>BTC</Text>
                <AppSpacer width={3}/>
                <Text style={styles.amount}>{props.wallet}</Text>
            </Row>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 150,
        backgroundColor: kAppWhiteColor,
        elevation: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    available: {
        color: kAppWalletDesc,
        fontSize: 20,
    },
    currency: {
        fontSize: 15,
        color: kAppWalletDesc2
    },
    amount: {
        fontSize: 40,
        color: kAppWalletAmount,
        fontWeight: "bold",
    },
    currencyRow: {
        alignItems: "center"
    }
});

export default WalletCard;