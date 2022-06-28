import { configureStore } from '@reduxjs/toolkit'
import { pokemonSlice } from './slices/pokemon/PokemonSlice'

export const store = configureStore({
  reducer: {

    pokemons: pokemonSlice.reducer

  }
})