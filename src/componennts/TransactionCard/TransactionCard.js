import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { kAppLightBlack, kAppWhiteColor } from "../../constants/colors";
import AppSpacer from "../AppSpacer/AppSpacer";
import Row from "../Row/Row";

const TransactionCard = (props) => {
    return (
        <View style={styles.container}>
            <Row style={{ justifyContent: "space-between", alignItems: "center" }}>
                <View>
                    <Text style={styles.title}>Wallet Funding</Text>
                    <AppSpacer height={5} />
                    <Text style={styles.desc}>Credited 3000btc to wallet</Text>
                </View>
                <Text style={{color: props.wallet ? "green" : "red"}}>+250</Text>
            </Row>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: kAppWhiteColor,
        elevation: 2,
        padding: 10
    },
    title: {
        fontWeight: "bold",
        fontSize: 15
    },
    desc: {
        color: kAppLightBlack
    }
});

export default TransactionCard;