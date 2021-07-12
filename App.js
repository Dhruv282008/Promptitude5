import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import TaskScreen from './screens/TaskScreen';
import {createSwitchNavigator, createAppContainer} from 'react-navigation'
export default function App() {
  return (
    <View style={styles.container}>
    <AppContainer />
      <StatusBar style="auto" />
    </View>
  );
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen: WelcomeScreen,
  TaskScreen: TaskScreen,
});

const AppContainer = createAppContainer(switchNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
