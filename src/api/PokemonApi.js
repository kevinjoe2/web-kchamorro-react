import axios from "axios";

export const pokemonApi = axios.create({
    baseURL: 'https://bp-pokemons.herokuapp.com'
})