import { useDispatch, useSelector } from "react-redux";
import { clearPokemonFindById, deletePokemon } from "../../store/slices/pokemon/thunks";

export const PokemonDelete = ({ handleClose }) => {

    // STORE
    const dispatch = useDispatch();
    const { pokemonFindById } = useSelector(state => state.pokemons);

    // EVENT BUTTON
    const onClickDelete = () => {
        dispatch( deletePokemon() );
        handleClose();
    }
    const onClickCancel = () => {
        dispatch( clearPokemonFindById() );
        handleClose();
    }

    return (
        <>

            <h4>¿Esta seguro/a de eliminar el pokemon {pokemonFindById.name}?</h4>

            <div className='d-flex-sa'>
                <button className='btn c-purple' onClick={ onClickDelete }>Eliminar</button>
                <button className='btn c-purple' onClick={ onClickCancel }>Cancelar</button>
            </div>

        </>
    )
}
