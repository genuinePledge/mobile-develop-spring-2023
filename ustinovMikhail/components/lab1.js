import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const Lab1 = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Text style={{ fontSize: 24 }}>Timer: {timer} seconds</Text>
      <Button title="Reset" onPress={() => setTimer(0)} />
    </View>
  );
};

export default Lab1;