import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback, Animated } from 'react-native'

const AnimacionSpring = () => {

    const [state] = useState(new Animated.Value(1))

    const presionarBoton = () => {
        Animated.spring( state, {
            toValue: .8,
            useNativeDriver: false,
        } ).start()
    }

    const solatrBoton = () => {
        Animated.spring(state, {
            toValue: 1,
            friction: 3, // Rebote
            tension: 100, // velocidad suave
            useNativeDriver: false,
        }).start()
    }

    const estiloAnimacion = {
        transform: [{ scale: state }]
    }

    return (
        <View style={styles.container} >
            <TouchableWithoutFeedback
                onPressIn={ presionarBoton }
                onPressOut={solatrBoton }
            >
                <Animated.View
                    style={[styles.btn, estiloAnimacion]}
                >
                    <Text
                        style={styles.texto}
                    >Iniciar sesión</Text>
                </Animated.View>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default AnimacionSpring;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },

    btn: {
        backgroundColor: 'cornflowerblue',
        width: 280,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    }

})
