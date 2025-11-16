import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import UserListScreen from './src/screens/UserListScreen';

export default function App() {
  return <UserListScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  nameText: {
    marginTop: 20,
    fontSize: 26,
    fontWeight: 'bold',
  },
});
