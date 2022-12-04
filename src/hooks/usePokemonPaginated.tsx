
import React, { useEffect, useRef, useState } from 'react'
import { pokemonApi } from '../api/pokemonApi';
import { PokemonPaginatedResponse, SimplePokemon, Result } from '../interfaces/pokemonInterfaces';

export const usePokemonPaginated = () => {
  
    const [isLoading, setIsLoading] = useState(true);

    const [ simplePokemonList, setSimplePokemonList ]= useState<SimplePokemon[]>([]);

    const nextPage = useRef('https://pokeapi.co/api/v2/pokemon/?limit=40')

    const loadPokemos = async() => {
        setIsLoading(true);
        const resp = await pokemonApi.get<PokemonPaginatedResponse>(nextPage.current);
        nextPage.current = resp.data.next;
        mapPokemonList(resp.data.results);
    }

    const mapPokemonList = ( pokemonList: Result[]) => {
        
        const newpokemonList: SimplePokemon[] =  pokemonList.map(({ name, url }) => {
            const urlParts = url.split('/');
            const id = urlParts[urlParts.length - 2];
            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

            return{ id, picture, name }
        });

        setSimplePokemonList([ ...simplePokemonList, ...newpokemonList ]);
        setIsLoading(false);
    }

    useEffect(() => {
        loadPokemos();
    
      
    }, [])
    

    return {
        simplePokemonList,
        isLoading,
        loadPokemos,
    }



}
