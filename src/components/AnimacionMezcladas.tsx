import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Animated } from 'react-native'

const AnimacionMezcladas = () => {

    const [Animacion1] = useState(new Animated.Value(0))
    const [Animacion2] = useState(new Animated.Value(1))
    // const [Animacion3] = useState(new Animated.Value(0))

    useEffect(() => {

        Animated.sequence([
            Animated.timing(Animacion1, {
                toValue: 300,
                duration: 1000,
                useNativeDriver: false,
            }),
            Animated.spring(Animacion2, {
                toValue: 300,
                speed: 1,
                useNativeDriver: false,
            }),
            Animated.spring(Animacion2, {
                toValue: 1,
                useNativeDriver: false,
            }),
            Animated.timing(Animacion1, {
                toValue: 500,
                duration: 1000,
                useNativeDriver: false,
            }),
        ]).start()

    }, [])

    const estiloAnimacion = {
        transform: [
            { translateY: Animacion1 },
            { scale: Animacion2 }
        ]
    }

    return (
        <View>
            <Animated.View
                style={[
                    styles.box,
                    estiloAnimacion
                ]}
            />
        </View>
    )
}

export default AnimacionMezcladas;
const styles = StyleSheet.create({
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'indigo',
    }
});
