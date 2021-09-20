import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './Home';

const Drawer = createDrawerNavigator();

export const Routes = props => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" options={{headerShown: false}} component={ Home } />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
