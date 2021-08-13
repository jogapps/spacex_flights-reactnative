import React, { useEffect, useRef, useState } from 'react';
import { Animated, Text } from 'react-native';
import { kAppAlertColor, kAppWhiteColor } from '../../constants/colors';

const AlertPopup = (props) => {

    const opacity = useRef(new Animated.Value(0))
        .current;

    const styles = {
        container: {
            opacity,
            transform: [
                {
                    translateY: opacity.interpolate({
                        inputRange: [0, 1],
                        outputRange: [-20, 0],
                    }),
                },
            ],
            marginHorizontal: 20,
            marginTop: 10,
            marginBottom: 5,
            backgroundColor: kAppAlertColor,
            padding: 15,
            borderRadius: 7.5,
            shadowColor: 'black',
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.15,
            shadowRadius: 5,
            elevation: 6,
        }
    };

    useEffect(() => {
        Animated.sequence([
            Animated.timing(opacity, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }),
            Animated.delay(1000),
            Animated.timing(opacity, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }),
        ]).start(() => {
            props.onHide();
        });
    }, []);

    return (
        <Animated.View
            style={styles.container}
        >
            <Text style={{color: kAppWhiteColor}}>{props.message}</Text> 
        </Animated.View>
    );
}

export default AlertPopup;