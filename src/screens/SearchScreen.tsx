

import React, {useState, useEffect} from 'react'
import { Text, View, Dimensions, Platform } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { styles } from '../theme/appTheme';
import { PokemonCards } from '../components/PokemonCards';
import { Loading } from '../components/Loading';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';



const width = Dimensions.get('window').width;

export const SearchScreen = () => {
  
    const {top} = useSafeAreaInsets();
    const {simplePokemonList, isFetching} = usePokemonSearch();
    const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([])
    const [term, setTerm] = useState('');


    useEffect(() => {
      if(term.length === 0){
        setPokemonFiltered([]);
      }
      if( isNaN( Number(term)) ){
          setPokemonFiltered(
            simplePokemonList.filter( (poke) => 
                poke.name.toLowerCase().includes( term.toLowerCase() )) 
          )
      }else{
        const pokemonById = simplePokemonList.find((poke) => poke.id === term);
        setPokemonFiltered(
            (pokemonById) ? [pokemonById] : []
        );
      }
    }, [term])
    

    if(isFetching){
        return <Loading />
    }

     return (
        <View style={{flex: 1, marginHorizontal: 20,marginBottom: 100 }}>
            
            <SearchInput 
                onDebounce={ (value) => setTerm(value) }
                stilo= {{
                    position: 'absolute',
                    zIndex: 999,
                    width: width -40,
                    top: (Platform.OS === 'ios') ? top : top  
                }} 
            />
            <FlatList 
                    ListHeaderComponent={(
                        <Text style={{
                            ...styles.title,
                            ...styles.globalMargin,
                            marginTop: top + 60,
                            marginBottom: 10,
                            
                        }}>{ term }</Text>
                    )}
                    data={pokemonFiltered}
                    keyExtractor={(pokemon) => pokemon.id}
                    numColumns={2}
                    renderItem={ ({ item }) => <PokemonCards pokemon={item}/> }
                />
        </View>

    )
  
}


