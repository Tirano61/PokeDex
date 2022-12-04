

import React from 'react'
import { Image, Text, FlatList, ActivityIndicator, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { FadeInImage } from '../components/FadeInImage';
import { PokemonCards } from '../components/PokemonCards';



export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();
    const { simplePokemonList, isLoading, loadPokemos } = usePokemonPaginated();

    return (
        <>
            <Image 
                source={require('../assets/pokebola.png')}
                style={styles.pokeBolaBG}
            />
            <View style={{ alignItems: 'center' }}>
                <FlatList 
                    ListHeaderComponent={(
                        <Text style={{
                            ...styles.title,
                            ...styles.globalMargin,
                            top: top + 20,
                            paddingBottom: 30,
                        }}>Pokedex</Text>
                    )}
                    data={simplePokemonList}
                    keyExtractor={(pokemon) => pokemon.id}
                    numColumns={2}
                    renderItem={ ({ item }) => <PokemonCards pokemon={item}/> }
                    //infinity scroll
                    onEndReached={loadPokemos}
                    ListFooterComponent={ 
                        <ActivityIndicator 
                            style={{ height:100 }}
                            color='grey'
                            size={30}
                        />
                    }
                />
            </View>
           
           
        </>
    )
}
