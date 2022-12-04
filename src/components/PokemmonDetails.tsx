

import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { PokemonFull } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';



interface Props {
    pokemon: PokemonFull,
}

export const PokemmonDetails = ( { pokemon }:Props) => {
  return (
    <ScrollView
        style={{
            ...StyleSheet.absoluteFillObject,
           
        }}
    > 
        {/*  TYPES y  PESO */}
        <View style={{
            ...styles.containerdatos,
            marginTop: 420,
           
        }}>
            <Text style={styles.title}>Types</Text>
                <View style={{flexDirection: 'row'}}>
                   {
                        pokemon.types.map( ({type}) => (
                            <Text
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10,
                                }}
                                key={type.name}
                            >
                                {type.name}
                            </Text>
                        ))
                    } 
                </View>
                {/* Peso */}
                <Text style={styles.title}>Peso</Text>
                <Text style={styles.regularText}>{pokemon.weight} kg</Text>
        </View>
        <View style={{
            ...styles.containerdatos,
        }}>
            <Text style={styles.title}>Sprites</Text>
        </View>
        <ScrollView
            style={{backgroundColor: '#efefef68'}}
            horizontal={ true }
        >
            <FadeInImage 
                uri={pokemon.sprites.front_default}
                style={styles.basicSprite}
            />
            <FadeInImage 
                uri={pokemon.sprites.back_default}
                style={styles.basicSprite}
            />
            <FadeInImage 
                uri={pokemon.sprites.front_shiny}
                style={styles.basicSprite}
            />
            <FadeInImage 
                uri={pokemon.sprites.back_shiny}
                style={styles.basicSprite}
            />
        </ScrollView>
        {/* Habilidades */}
        <View style={{
            ...styles.containerdatos,
        }}>
            <Text style={styles.title}>Habilidades</Text>
            <View style={{flexDirection: 'row'}}>
                {
                    pokemon.abilities.map( ({ ability }) => (
                        <Text
                            style={{
                                ...styles.regularText,
                                marginRight: 10,
                            }}
                            key={ability.name}
                        >
                            {ability.name}
                        </Text>
                    ))
                } 
            </View>
        </View>
        {/* Movimientos */}
        <View style={{
            ...styles.containerdatos,
        }}>
            <Text style={styles.title}>Movimientos</Text>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                {
                    pokemon.moves.map( ({ move }) => (
                        <Text
                            style={{
                                ...styles.regularText,
                                marginRight: 10,
                            }}
                            key={move.name}
                        >
                            {move.name}
                        </Text>
                    ))
                } 
            </View>
        </View>
         {/* Stats */}
         <View style={{
            ...styles.containerdatos,
        }}>
            <Text style={styles.title}>Stats</Text>
            <View style={{}}>
                {
                    pokemon.stats.map( ( stat, i ) => (
                        <View style={{
                            flexDirection: 'row',
                        }}
                            key={stat.stat.name + i}
                        >
                            <Text
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10,
                                    width: 150,
                                }}
                            >
                                {stat.stat.name}
                            </Text>
                            <Text
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10,
                                    fontWeight: 'bold',
                                }}
                            >
                                {stat.base_stat}
                            </Text>
                        </View>
                    ))
                } 
            </View>
            {/* SPRITE FINAL */}
            <View style={{
                    marginTop: 30,
                    marginBottom: 50,
                    alignItems: 'center',
                }}
            >
               <FadeInImage 
                    uri={pokemon.sprites.front_default}
                    style={styles.basicSprite}
                />  
            </View>
                   
        </View>
        

        
    </ScrollView>
  )
}


const styles = StyleSheet.create({
    containerdatos:{
        marginHorizontal: 20,

    },
    title:{
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
    },
    regularText:{
        fontSize: 17,
    },
    basicSprite:{
        width: 120,
        height: 120,
    }
});