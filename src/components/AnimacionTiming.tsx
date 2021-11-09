import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Animated } from 'react-native'

const AnimacionTiming = () => {

    const [ state ] = useState(new Animated.Value(0));

    useEffect(() => {
      
      Animated.timing(
        state,
        {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }
      ).start();
  
    }, []);


    return (
        <Animated.View
            style={{ 
                opacity: state,
            }}
        >
            <Text style={styles.texto} > Animacion Timing </Text>
        </Animated.View>
    )
}

export default AnimacionTiming;

const styles = StyleSheet.create({
    texto: {
        fontSize: 30,
        textAlign: 'center'
    }
});
