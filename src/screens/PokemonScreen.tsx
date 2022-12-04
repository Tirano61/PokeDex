


import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { FadeInImage } from '../components/FadeInImage';
import { RootStackParams } from '../navigator/Tab1';
import { usePokemon } from '../hooks/usePokemon';
import { PokemmonDetails } from '../components/PokemmonDetails';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {};

const width = Dimensions.get('window').width;

export const PokemonScreen = ( { navigation, route }: Props ) => {

    const { simplePokemon, color } = route.params;
    const { top } = useSafeAreaInsets();

    const {pokemonState, isLoaiding} = usePokemon( simplePokemon.id );

    return (
        
        <View style={{flex: 1}}>
            {/* Header container */}
            <View style={{
                ...styles.headerContainer,
                backgroundColor: color,
                  
            }} 
            >
                <TouchableOpacity 
                    onPress={() => navigation.pop()}
                    activeOpacity={0.8}
                    style={{
                        ...styles.backButton, 
                        top: 20,
                    }}
                >
                    <Icon name='arrow-back-outline' size={40} color= '#ffffff'/>
                </TouchableOpacity>
                {/* Nombre pokemon */}
                <Text style={{
                    ...styles.pokemonName,
                    top: top + 20
                }}>{ simplePokemon.name + '\n'} #{simplePokemon.id}</Text>

                <Image 
                    source={require('../assets/pokebola-blanca.png')}
                    style={{
                        ...styles.pokebola,
                    }}
                />
                <FadeInImage 
                    uri={simplePokemon.picture}
                    style={{
                        ...styles.pokemonInage
                    }}
                /> 

            </View>
            {/* Detalles y loading */}
            {
                isLoaiding 
                ?
                <View style={styles.activityIndicator}>
                    <ActivityIndicator color={color} size={40}  />
                </View>
                :
                <PokemmonDetails pokemon={pokemonState}/>
            }

            
        </View>
       
        
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 400,
        zIndex: 999,
        borderBottomLeftRadius: 1000,
        borderBottomRightRadius: 1000,
    },
    backButton:{
        alignSelf: 'flex-start',  
        left: 15,
    },
    pokemonName:{
        color: '#ffffff',
        fontSize: 43,
        alignSelf: 'flex-start',
        left: 15, 
        fontWeight: 'bold',
    },
    pokebola:{
        width: 260,
        height: 260,
        bottom: 20,
        opacity: 0.7,
        alignSelf: 'center',
    },
    pokemonInage:{
        width:300,
        height: 300,
        position: 'absolute',
        bottom: -25,
        alignSelf: 'center',

    },
    activityIndicator:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});