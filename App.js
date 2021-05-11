import React, {Component} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import Home from './view/home';
import AppBar from './components/header';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            header: props => <AppBar />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
