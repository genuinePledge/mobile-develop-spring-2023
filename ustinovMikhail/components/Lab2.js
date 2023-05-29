import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Accelerometer } from 'expo-sensors';

const Lab2 = () => {
  const [shakes, setShakes] = useState(0);

  useEffect(() => {
    let subscription;

    const startShakeDetection = () => {
      subscription = Accelerometer.addListener(accelerometerData => {
        const { x, y, z } = accelerometerData;
        const acceleration = Math.sqrt(x * x + y * y + z * z);

        if (acceleration > 2) {
          setShakes(prevShakes => prevShakes + 1);
        }
      });
    };

    const stopShakeDetection = () => subscription.remove();

    startShakeDetection();

    return () => stopShakeDetection();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Shakes: {shakes}</Text>
      <Text style={styles.text}>SHAKE THE PHONE!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default Lab2;