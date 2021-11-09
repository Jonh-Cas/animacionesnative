import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Animated } from 'react-native'

const AnimacionTimingInterpolation = () => {

    const [ state ] = useState(new Animated.Value(0));

    useEffect(() => {
      
      Animated.timing(
        state,
        {
          toValue: 360,
          duration: 500,
          useNativeDriver: true,
        }
      ).start();
  
    }, []);

    const interpolacion = state.interpolate({
        inputRange: [0, 360],
        outputRange: ['0deg', '360deg' ],
    });

    const estiloAnimacion = {
        transform: [{rotate: interpolacion }]
    }


    return (
        <Animated.View
            style={[styles.box, estiloAnimacion  ] }
        >
        </Animated.View>
    )
}

export default AnimacionTimingInterpolation;

const styles = StyleSheet.create({
    box: {
        height: 100,
        width: 100,
        backgroundColor: 'cornflowerblue'
    }
});
