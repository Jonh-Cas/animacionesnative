import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Animated } from 'react-native'

const AnimacionSequencias = () => {

    const [state1] = useState(new Animated.Value(0));
    const [state2] = useState(new Animated.Value(-50));

    useEffect(() => {

        Animated.loop(Animated.sequence([
            Animated.timing(state2, {
                toValue: 30,
                duration: 500,
                useNativeDriver: false,
            }),
            Animated.timing(state1, {
                toValue: 100,
                duration: 500,
                useNativeDriver: false,
            }),
            Animated.timing(state2, {
                toValue: 30,
                duration: 500,
                useNativeDriver: false,
            }),
            Animated.timing(state1, {
                toValue: 0,
                duration: 500,
                useNativeDriver: false,
            }),
            Animated.timing(state2, {
                toValue: -30,
                duration: 500,
                useNativeDriver: false,
            }),
            Animated.timing(state1, {
                toValue: 100,
                duration: 500,
                useNativeDriver: false,
            })

        ])).start();

    }, []);

    const estilosAnimados = { 
        transform: [
            {translateY: state1},
            {translateX: state2},
        ]
    }

    return (
        <View style={{ alignItems: 'center' }}>
            <Animated.View 
            style={[
                styles.caja,
                estilosAnimados
            ]} 
            >

            </Animated.View>
        </View>
    )
}

export default AnimacionSequencias;

const styles = StyleSheet.create({
    caja: {
        width: 10,
        height: 10,
        backgroundColor: 'indigo',
    },



})
