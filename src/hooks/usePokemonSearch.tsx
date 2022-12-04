
import React, { useEffect, useRef, useState } from 'react'
import { pokemonApi } from '../api/pokemonApi';
import { PokemonPaginatedResponse, SimplePokemon, Result } from '../interfaces/pokemonInterfaces';

export const usePokemonSearch = () => {
  
    const [isFetching, setIsFetching] = useState(true);

    const [ simplePokemonList, setSimplePokemonList ]= useState<SimplePokemon[]>([]);

    const loadPokemos = async() => {
       
        const resp = await pokemonApi.get<PokemonPaginatedResponse>('https://pokeapi.co/api/v2/pokemon?limit=1200');
       
        mapPokemonList(resp.data.results);
    }

    const mapPokemonList = ( pokemonList: Result[]) => {
        
        const newpokemonList: SimplePokemon[] =  pokemonList.map(({ name, url }) => {
            const urlParts = url.split('/');
            const id = urlParts[urlParts.length - 2];
            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

            return{ id, picture, name }
        });

        setSimplePokemonList( newpokemonList );
        setIsFetching(false);
    }

    useEffect(() => {
        loadPokemos();
    
    }, [])

    return {
        simplePokemonList,
        isFetching,
    }

}
