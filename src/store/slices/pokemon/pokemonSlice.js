import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
   name: 'pokemon',
   initialState: {
      pokemons: [],
      pokemonFindById: {},
      isLoading: false,
   },
   reducers: {
      startLoadingPokemons: (state) => {
         state.isLoading = true;
      },
      endLoadingPokemons: (state) => {
         state.isLoading = false;
      },
      setPokemons: ( state, action ) => {
         state.pokemons = action.payload.pokemons;
      },
      setPokemonFindById: ( state, action ) => {
         state.pokemonFindById = action.payload;
      },
   }
});

// Action creators are generated for each case reducer function
export const { 
   startLoadingPokemons, 
   endLoadingPokemons, 
   setPokemons,
   setPokemonFindById,
} = pokemonSlice.actions;