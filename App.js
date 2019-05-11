import React from 'react';
import { View, Button } from 'react-native';
import { useScreens } from 'react-native-screens';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch'
import { createStackNavigator, createAppContainer } from 'react-navigation'

useScreens();

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Button title="Switch to Main Scene" onPress={() => { navigation.navigate('MainStack') }} />
  </View>
)

const MainScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Button title="Switch to Home Scene" onPress={() => { navigation.navigate('HomeStack') }} />
  </View>
)

const HomeStackNavigator = createStackNavigator({
  HomeStack: {
    screen: HomeScreen,
  }
})

const MainStackNavigator = createStackNavigator({
  MainStack: {
    screen: MainScreen,
  }
})

const AnimatedSwitchNavigator = createAnimatedSwitchNavigator({
  Home: {
    screen: HomeStackNavigator,
  },
  Main: {
    screen: MainStackNavigator,
  }
})

const AppContainer = createAppContainer(AnimatedSwitchNavigator);

export default () => {
  return (
    <AppContainer />
  )
}
