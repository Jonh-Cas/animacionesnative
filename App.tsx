import React from 'react'
import { View, StyleSheet,  } from 'react-native'
// import AnimacionTiming from './src/components/AnimacionTiming';
import AnimacionTimingInterpolation from './src/components/AnimacionTimingInterpolation';
// import AnimacionTimingDuration from './src/components/AnimacionTimingDuration';
// import AnimacionTimingText from './src/components/AnimacionTimingText';

const App = () => {

  return (
  <>
    <View style={styles.container} >
      <AnimacionTimingInterpolation />
    </View>
  </>
  )
}

export default App;

const styles = StyleSheet.create({
    container: {
      marginTop: 100,
    }
});
