import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Search from './src/components/Search';
import { NavigationContainer } from '@react-navigation/native';

import Navigation from './src/navigation/Navigation';

export default function App() {
  return (
    
    <NavigationContainer>
    <Navigation />
    <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
