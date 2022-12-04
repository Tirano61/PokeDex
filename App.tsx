
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
// import { StackNavigation } from './src/navigator/StackNavigator';
import { Tabs } from './src/navigator/Tabs';


export const App = () => {
  return (
    <NavigationContainer>
          {/* <StackNavigation /> */}

      <Tabs />   
    </NavigationContainer>
    
    
  )
}


export default App;
