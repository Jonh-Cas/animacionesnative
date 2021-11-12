import React from 'react'
import { View, StyleSheet,  } from 'react-native'
// import AnimacionTiming from './src/components/AnimacionTiming';
// import AnimacionTimingInterpolation from './src/components/AnimacionTimingInterpolation';
// import AnimacionTimingDuration from './src/components/AnimacionTimingDuration';
// import AnimacionTimingText from './src/components/AnimacionTimingText';
// import AnimacionSpring from './src/components/AnimacionSpring';
// import AnimacionSequencias from './src/components/AnimacionSequencias';
import AnimacionMezcladas from './src/components/AnimacionMezcladas';

const App = () => {

  return (
  <>
    <View style={styles.container} >
     <AnimacionMezcladas />
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
