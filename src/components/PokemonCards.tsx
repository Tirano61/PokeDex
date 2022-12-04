

import { useNavigation } from '@react-navigation/native';
import React,{useState, useEffect, useRef} from 'react'
import { View, StyleSheet, Dimensions, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ImageColors from 'react-native-image-colors';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';

interface Props {
    pokemon: SimplePokemon,
}

const windowWidth = Dimensions. get('window').width;

export const PokemonCards = ({ pokemon }: Props ) => { 

    const { navigate } = useNavigation()
    const [bgColor, setBgColor] = useState('grey');

    const isMounted = useRef(true);

    useEffect(() => {

        ImageColors.getColors(pokemon.picture, {fallback: 'grey'})
            .then( colors => {
                if (!isMounted.current) return;

                if(colors.platform === "android"){
                    setBgColor(colors.dominant || 'grey');
                }else if(colors.platform === "ios"){
                    setBgColor( colors.background || 'grey');
                } 
               
            });
        return () =>{
           isMounted.current = false; 
        }    
      
    }, [])
    

    return (
        <TouchableOpacity
            onPress={() =>navigate('PokemonScreen' as never, { simplePokemon: pokemon, color: bgColor } as never)}
            activeOpacity={0.6}
        >
            <View style={{
                ...styles.cardContainer,
                width: windowWidth * 0.4,
                backgroundColor: bgColor,
                }}
            >
                {/* Nombre del pokemon */}
                <View>
                    <Text style={styles.name}>{pokemon.name}{ '\n#' + pokemon.id }</Text>
                </View>
                <View style={styles.pokebolaContainer}>
                    <Image 
                        source={require('../assets/pokebola-blanca.png')}
                        style={styles.pokebola}
                    />
                </View>
                
                <FadeInImage
                    uri={pokemon.picture}
                    style={styles.pokemonImage}
                />
            </View>
            {/* 
            */}
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    cardContainer:{
        marginHorizontal: 10,
        backgroundColor: "#17bbca",
        height: 150,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.9,
        shadowRadius: 8.30,

        elevation: 13,
        
    },
    name: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        top: 10,
        left: 10,
        textShadowColor: 'black',
        elevation: 7,
    },
    pokebolaContainer:{
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: 0,
        right: 0,
        overflow: 'hidden',
        borderRadius: 10
    },
    pokebola:{
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: -20,
        right: -20,
        opacity: 0.4,
    },
    pokemonImage:{
        width: 125,
        height: 125,
        position: 'absolute',
        right: -7,
        bottom: -5,
    },
});