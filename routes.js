import 'react-native-gesture-handler';
import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Homepage, { HomepageId } from './src/screens/Homepage/Homepage';

const Stack = createStackNavigator();

const AppRoutes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={HomepageId}>
                <Stack.Screen name={HomepageId} component={Homepage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppRoutes;