



import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { PokemonScreen } from '../screens/PokemonScreen';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { StatusBar } from 'react-native';


export type RootStackParams = {
    HomeScreen: undefined,
    PokemonScreen: { simplePokemon: SimplePokemon, color: string }
}

const Tab1 = createStackNavigator<RootStackParams>();

export const Tab1Screen = () => {
  return (
    
    <Tab1.Navigator
      
      screenOptions={{
        
        headerShown: false,
       
        cardStyle: {
          backgroundColor: 'white',
          
        }
      }}
    >
      
      <Tab1.Screen name="HomeScreen" component={HomeScreen} />
      <Tab1.Screen name="PokemonScreen" component={PokemonScreen} />

    </Tab1.Navigator>
  );
}