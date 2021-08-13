import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import AlertPopup from "../../componennts/AlertPopup/AlertPopup";
import AppBarNav from "../../componennts/AppBarNav/AppBarNav";
import AppDropdown from "../../componennts/AppDropdown/AppDropdown";
import AppMainButton from "../../componennts/AppMainButton/AppMainButton";
import AppSpacer from "../../componennts/AppSpacer/AppSpacer";
import AppStatusBar from "../../componennts/AppStatusBar/AppStatusBar";
import { kAppWhiteColor2 } from "../../constants/colors";
import { HomepageId } from "../../screens/Homepage/Homepage";
import { setWallet } from "../../store/actions/authActions";
import { getStorage } from "../../utils/appHellpers";

const BookingsId = "Book";
const Bookings = (props) => {

    const orders = {
        abuja: {
            type: "natural",
            orbit: "earth"
        },
        spock: {
            type: "natural",
            orbit: "mars"
        },
        iss: {
            type: "manmade",
            orbit: "earth"
        },
        moon: {
            type: "natural",
            orbit: "earth"
        },
    }
    const [amount, setAmount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState([]);

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Falcon 1', value: 'falcon1' },
        { label: 'Falcon 9', value: 'falcon9' }
    ]);

    const [open2, setOpen2] = useState(false);
    const [value2, setValue2] = useState(null);
    const [items2, setItems2] = useState([
        { label: 'Abuja', value: 'abuja' },
        { label: 'Spock', value: 'spock' },
        { label: 'International Space Station', value: 'iss' },
        { label: 'Moon ', value: 'moon' },
    ]);

    const [open3, setOpen3] = useState(false);
    const [value3, setValue3] = useState(null);
    const [items3, setItems3] = useState([
        { label: 'Abuja', value: 'abuja' },
        { label: 'Spock', value: 'spock' },
        { label: 'International Space Station', value: 'iss' },
        { label: 'Moon ', value: 'moon' },
    ]);

    const bookTrip = async () => {
        if (!value || !value2 || !value3) {
            setMessages([...messages, "select all options"]);
            return;
        } else {
            //setLoading(true);
            if (orders[value3].type == "manmade") {
                setAmount(amount + 200);
            }
            if (orders[value2].orbit == orders[value3].orbit) {
                if (value == "falcon1") setAmount(amount + 50);
                else if (value == "falcon9") setAmount(amount + 100);
            }
            if (orders[value2].orbit != orders[value3].orbit) {
                if (value == "falcon1") setAmount(amount + 250);
                else if (value == "falcon9") setAmount(amount + 500);
            }
            let currentWallet = await getStorage("wallet");
            if (!currentWallet) {
                setMessages([...messages, "Insufficient Funds"]);
                return;
            } else {
                if (Number(currentWallet) < amount) {
                    setMessages([...messages, "Insufficient Funds"]);
                    return;
                } else {
                    let newAmount = Number(currentWallet) - Number(amount);
                    try {
                        console.log(amount);
                        console.log(await getStorage("wallet"))
                        await AsyncStorage.setItem("wallet", `${newAmount}`);
                        props.setWallet(newAmount);
                        setMessages([...messages, "Booked sucessfully"]);
                        console.log(await getStorage("wallet"));
                    } catch (e) {
                        console.log(e)
                        setMessages([...messages, "Error! Try Again!"]);
                    }
                    
                }
            }
            setLoading(false);
        }
    }

    useEffect(() => {
    }, []);

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
            <AppBarNav title="Book Trip" />
            <View style={styles.container2}>
                <AppSpacer height={30} />
                <AppDropdown
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    title="Falcon Type"
                />
                <AppSpacer height={20} />
                <AppDropdown
                    open={open2}
                    value={value2}
                    items={items2}
                    setOpen={setOpen2}
                    setValue={setValue2}
                    setItems={setItems2}
                    zIndex={1000}
                    zIndexReverse={4000}
                    title="Departure" />
                <AppSpacer height={20} />
                <AppDropdown
                    open={open3}
                    value={value3}
                    items={items3}
                    setOpen={setOpen3}
                    setValue={setValue3}
                    setItems={setItems3}
                    title="Destination" />
                <AppSpacer height={40} />
                <AppMainButton text="Book"
                    width={0.9}
                    loading={loading}
                    onPress={bookTrip} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Bookings);
export { BookingsId };