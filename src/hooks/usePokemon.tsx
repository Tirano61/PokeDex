import {useState,useEffect} from 'react';
import { PokemonFull } from '../interfaces/pokemonInterfaces';

import { pokemonApi } from '../api/pokemonApi';



export const usePokemon = (id: string) =>{

    const [isLoaiding, setIsLoading ] = useState(true);
    const [pokemonState, setPokemonState] = useState<PokemonFull>({} as PokemonFull);

    useEffect(() => {
      loadPoklemon();
    }, [])
    
    const loadPoklemon = async() => {
        const resp = await pokemonApi.get<PokemonFull>(`https://pokeapi.co/api/v2/pokemon/${id}`);

        setPokemonState(resp.data);
        setIsLoading(false);
    }
    return{
        isLoaiding,
        pokemonState,
    }
}