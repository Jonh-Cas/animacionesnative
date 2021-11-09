import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Animated } from 'react-native'

const AnimacionTimingText = () => {

    const [ state ] = useState(new Animated.Value(14));

    useEffect(() => {
      
      Animated.timing(
        state,
        {
          toValue: 40,
          duration: 500,
          useNativeDriver: false,
        }
      ).start();
  
    }, []);


    return (
        <View>
            <Animated.Text style={[styles.texto, {fontSize: state }]} > Animacion Timing </Animated.Text>
        </View>
    )
}

export default AnimacionTimingText;

const styles = StyleSheet.create({
    texto: {
        fontSize: 14,
        textAlign: 'center'
    }
});
