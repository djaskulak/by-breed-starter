import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './components/HomeScreen';
import CatsScreen from './components/CatsScreen';
import DogsScreen from './components/DogsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Cats" component={CatsScreen} />
        <Tab.Screen name="Dogs" component={DogsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
