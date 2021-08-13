import React from "react";
import { StyleSheet } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import Wallet, { WalletId } from "../../navigations/Wallet/Wallet";
import { kAppBarSelected, kAppBarUnselected } from "../../constants/colors";
import Book, { BookId, BookingsId } from "../../navigations/Book/Book";
import History, { HistoryId } from "../../navigations/History/History";
import Bookings from "../../navigations/Book/Book";

const Tab = createBottomTabNavigator();

const HomepageId = "Homepage";
const Homepage = (props) => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={WalletId}
                screenOptions={{
                    headerShown: false,
                }}
                tabBarOptions={{
                    activeTintColor: kAppBarSelected,
                    inactiveTintColor: kAppBarUnselected,
                    style: styles.appBar,
                    labelStyle: styles.appBarLabel
                }}>
                <Tab.Screen
                    name={WalletId}
                    component={Wallet}

                    options={{
                        tabBarLabel: WalletId,
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="wallet-outline" color={color} size={25} />
                        ),
                    }}
                />
                <Tab.Screen
                    name={BookingsId}
                    component={Bookings}
                    options={{
                        tabBarLabel: BookingsId,
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="airplane-takeoff" color={color} size={25} style={{ color: color }} />
                        ),
                    }}
                />
                <Tab.Screen
                    name={HistoryId}
                    component={History}
                    options={{
                        tabBarLabel: HistoryId,
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="history" color={color} size={25} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    appBar: {
        borderTopWidth: 0,
        height: 70,
        backgroundColor: "red",
        elevation: 10,
        paddingBottom: 15,
        paddingTop: 10,
        // For IOS
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.12,
        shadowRadius: 60,
    },
    appBarLabel: {
        fontSize: 12,
        paddingTop: 3
    }
});

export default Homepage;
export { HomepageId };