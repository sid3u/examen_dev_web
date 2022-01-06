import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Personne = () => {
  return (
    <View style={styles.container}>
      <Text>
        Je suis une personne
      </Text>
    </View>
  )
};

export default Personne;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});