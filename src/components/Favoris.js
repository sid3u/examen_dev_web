import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Favoris = () => {
  return (
    <View style={styles.container}>
      <Text>
        Je suis la liste des favoris
      </Text>
    </View>
  )
};

export default Favoris;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});