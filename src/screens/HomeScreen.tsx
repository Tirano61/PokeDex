

import React from 'react'
import { Image, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles }  from "../theme/appTheme";
import { usePokemonPaginated } from '../components/usePokemonPaginated';


export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();
    const {url} = usePokemonPaginated();

    return (
        <>
            <Image 
                source={require('../assets/pokebola.png')}
                style={styles.pokeBolaBG}
            />

            <Text style={{
                ...styles.title,
                ...styles.globalMargin,
                top: top +20,
            }}>Pokedex</Text>
        </>
    )
}
