import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import AlertPopup from "../../componennts/AlertPopup/AlertPopup";
import AppMainButton from "../../componennts/AppMainButton/AppMainButton";
import AppSpacer from "../../componennts/AppSpacer/AppSpacer";
import AppStatusBar from "../../componennts/AppStatusBar/AppStatusBar";
import AppTextField from "../../componennts/AppTextField/AppTextField";
import WalletCard from "../../componennts/WalletCard/WalletCard";
import { kAppWhiteColor2 } from "../../constants/colors";
import { kAppStatusBarHeight } from "../../constants/dimensions";
import { setWallet } from "../../store/actions/authActions";
import { getStorage } from "../../utils/appHellpers";

const WalletId = "Wallet";
const Wallet = (props) => {

    const [amount, setAmount] = useState("");
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState([]);

    const [wallet, setWallet] = useState();

    useEffect(async () => {
        let currentWallet = await getStorage("wallet");
        props.setWallet( currentWallet ? currentWallet : 0 );
    }, []);

    const fundWallet = async () => {
        if (!amount) {
            setMessages([...messages, "Enter amount"]);
            return;
        } else if (isNaN(amount)) {
            setMessages([...messages, "Enter valid amount"]);
            return;
        } else {
            setLoading(true);
            let currentWallet = await getStorage("wallet");
            if (!currentWallet) {
                // make new funding current wallet
                try {
                    await AsyncStorage.setItem("wallet", `${amount}`);
                    setWallet(currentWallet);
                } catch (e) {
                    setMessages([...messages, "Error! Try Again!"]);
                }
            } else {
                // add amount to wallet
                let newWallet = Number(amount) + Number(currentWallet);
                try {
                    await AsyncStorage.setItem("wallet", `${newWallet}`);
                    props.setWallet(newWallet);
                } catch (e) {
                    setMessages([...messages, "Error! Try Again!"]);
                }
            }
            setLoading(false);
        }
    }

    return (
        <View style={styles.container}>
            <AppStatusBar />
            <View
                style={{
                    position: 'absolute',
                    top: 45,
                    left: 0,
                    right: 0,
                }}
            >
                {messages.map(message => (
                    <AlertPopup
                        key={message}
                        message={message}
                        onHide={() => {
                            setMessages((messages) =>
                                messages.filter(
                                    (currentMessage) =>
                                        currentMessage !== message
                                )
                            );
                        }}
                    />
                ))}
            </View>
            <AppSpacer height={10 + kAppStatusBarHeight} />
            <View style={styles.container2}>
                <AppSpacer height={60} />
                <WalletCard wallet={props.wallet}/>
                <AppSpacer height={50} />
                <AppTextField 
                title="Amount to Fund" 
                value={amount} 
                onChangeText={(val) => setAmount(val)}/>
                <AppSpacer height={40} />
                <AppMainButton
                    text="Fund Wallet"
                    loading={loading}
                    width={0.9}
                    onPress={fundWallet} />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: kAppWhiteColor2
    },
    container2: {
        marginHorizontal: 20,
        width: "90%",
    }
});

const mapStateToProps = (state) => {
    return {
        wallet: state.authReducers.WALLET
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setWallet: (wallet) => dispatch(setWallet(wallet))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
export { WalletId };