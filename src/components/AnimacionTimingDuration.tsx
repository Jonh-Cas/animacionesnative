import React, { useEffect, useState } from 'react'
import { StyleSheet, Animated } from 'react-native'

const AnimacionTimingDuration = () => {

    const [ state ] = useState(new Animated.Value(0));

    useEffect(() => {
      
      Animated.timing(
        state,
        {
          toValue: 200,
          duration: 1000,
          useNativeDriver: false,
        }
      ).start();
  
    }, []);


    return (
        <Animated.View
            style={[
                styles.box,
                {
                    height: state,
                    width: state,
                }
            ]}
        >
          
        </Animated.View>
    )
}

export default AnimacionTimingDuration;

const styles = StyleSheet.create({
     box: {
         width: 100,
         height: 100,
         backgroundColor: 'indigo',
     }
});
