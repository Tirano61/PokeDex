

import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Platform } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { Tab2Screen } from './Tab2';
import { Tab1Screen } from './Tab1';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
    
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      
      screenOptions={{
        
        tabBarActiveTintColor: '#9c16ef',
        headerShown: false,
        tabBarLabelStyle: {
          marginBottom: (Platform.OS === 'ios') ? 0 : 8,
        },
        tabBarStyle:{
          backgroundColor: '#ffffffc7',
          elevation: 0,
          borderWidth: 0,
          position: 'absolute',
          
        }
        
      }}
      
    >
      <Tab.Screen name="HomeScreen" 
        options={{
          tabBarLabel: 'Listado', 
          tabBarIcon: (() => <Icon name="list-outline" size={22} color='#9c16ef'/>
        )}} 
        component={Tab1Screen} 
      />
      
      <Tab.Screen 
        name="SearchScreen"
        options={{
          tabBarLabel: 'Buscar', 
          tabBarIcon: (() => <Icon name="search-outline" size={22} color='#9c16ef'/>
        )}} 
        component={Tab2Screen} 
      />
    </Tab.Navigator>
  );
}