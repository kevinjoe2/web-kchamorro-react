import { clearPokemonFindById, deletePokemon, getPokemons, pokemonFindById, savePokemon, updatePokemon } from "../../../../src/store/slices/pokemon/thunks";

describe("Test Thunks Pokemon", () => {

    const dispatch = jest.fn();
    const getState = jest.fn(fn => { return { pokemons: { pokemonFindById: { id: 1 } } } });

    beforeEach( () => jest.clearAllMocks() );

    test("Test getPokemons", async() => {

        await getPokemons('')( dispatch );
        expect( dispatch ).toHaveBeenCalledWith({"payload": undefined, "type": "pokemon/startLoadingPokemons"});
        expect( dispatch ).toHaveBeenCalledWith({"payload": {"pokemons": []}, "type": "pokemon/setPokemons"});
        expect( dispatch ).toHaveBeenCalledWith({"payload": undefined, "type": "pokemon/endLoadingPokemons"});

    });

    test("Test pokemonFindById", async() => {

        await pokemonFindById('')( dispatch );
        expect( dispatch ).toHaveBeenCalledWith({"payload": undefined, "type": "pokemon/startLoadingPokemons"});
        
        expect( dispatch ).toHaveBeenCalledWith({"payload": undefined, "type": "pokemon/endLoadingPokemons"});

    });

    test("Test clearPokemonFindById", async() => {

        await clearPokemonFindById()( dispatch );
        expect( dispatch ).toHaveBeenCalledWith({"payload": {}, "type": "pokemon/setPokemonFindById"});

    });

    test("Test savePokemon", async() => {

        await savePokemon({})( dispatch );
        expect( dispatch ).toHaveBeenCalledWith({"payload": undefined, "type": "pokemon/startLoadingPokemons"});
        
        expect( dispatch ).toHaveBeenCalledWith({"payload": undefined, "type": "pokemon/endLoadingPokemons"});

    });

    test("Test updatePokemon", async() => {

        await updatePokemon({})( dispatch, getState );
        expect( dispatch ).toHaveBeenCalledWith({"payload": undefined, "type": "pokemon/startLoadingPokemons"});
        
        expect( dispatch ).toHaveBeenCalledWith({"payload": undefined, "type": "pokemon/endLoadingPokemons"});

    });

    test("Test deletePokemon", async() => {

        await deletePokemon('')( dispatch, getState );
        expect( dispatch ).toHaveBeenCalledWith({"payload": undefined, "type": "pokemon/startLoadingPokemons"});
        
        expect( dispatch ).toHaveBeenCalledWith({"payload": undefined, "type": "pokemon/endLoadingPokemons"});

    });

})