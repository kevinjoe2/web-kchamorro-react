import { pokemonApi } from "../../../api/PokemonApi";
import { 
    startLoadingPokemons, 
    endLoadingPokemons,
    setPokemons,
    setPokemonFindById,
} from "./pokemonSlice";

const idAuthor = 1;

// STORE
//const { newPokemon, editPokemon, removePokemon } = useSelector(state => state.pokemons);

export const getPokemons = ( search='' ) => {
    return async( dispatch, getState ) => {
        dispatch( startLoadingPokemons() );
        dispatch( setPokemons( { pokemons: [] } ) );
        const { data } = await pokemonApi.get(`/?idAuthor=${idAuthor}`);
        const pokemons = data.filter(poke => poke.name.toUpperCase().includes(search.toUpperCase()));
        dispatch( setPokemons( { pokemons: pokemons } ) );
        dispatch( endLoadingPokemons() );
    };
}

export const pokemonFindById = ( id ) => {
    return async( dispatch, getSate ) => {
        dispatch( startLoadingPokemons() );
        const { data } = await pokemonApi.get(`/${id}`);
        dispatch( setPokemonFindById( { ...data, isComplete:true } ) );
        dispatch( endLoadingPokemons() );
    }
}

export const clearPokemonFindById = ( ) => {
    return async( dispatch, getSate ) => {
        dispatch( setPokemonFindById( {} ) );
    }
}

export const savePokemon = ( newPokemon ) => {
    return async( dispatch, getState ) => {
        dispatch( startLoadingPokemons() );
        newPokemon.idAuthor = idAuthor;
        await pokemonApi.post('', newPokemon);
        dispatch( getPokemons() );
        dispatch( endLoadingPokemons() );
    }
}

export const updatePokemon = ( editPokemon ) => {
    return async( dispatch, getState ) => {
        dispatch( startLoadingPokemons() );
        const { pokemons } = getState();
        const { pokemonFindById } = pokemons;
        editPokemon.idAuthor = idAuthor;
        await pokemonApi.put(`/${pokemonFindById.id}`, editPokemon);
        dispatch( setPokemonFindById({}) );
        dispatch( getPokemons() );
        dispatch( endLoadingPokemons() );
    }
}

export const deletePokemon = ( ) => {
    return async( dispatch, getState ) => {
        dispatch( startLoadingPokemons() );
        const { pokemons } = getState();
        const { pokemonFindById } = pokemons;
        await pokemonApi.delete(`/${pokemonFindById.id}`);
        dispatch( setPokemonFindById({}) );
        dispatch( getPokemons() );
        dispatch( endLoadingPokemons() );
    }
}
