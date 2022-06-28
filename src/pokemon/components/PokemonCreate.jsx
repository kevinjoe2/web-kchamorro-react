import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { savePokemon } from '../../store/slices/pokemon/thunks';
import { FaSave,IoClose } from 'react-icons/all';

export const PokemonCreate = ({handleClose}) => {

  // STORE
  const dispatch = useDispatch();

  // FORM
  const [pokemon, setPokemon] = useState({name:'',image:'',attack:0,defense:0,hp:0,type:''});

  // EVENT BUTTON
  const onClickSave = (e) => {
    dispatch( savePokemon(pokemon) );
    handleClose();
  };
  const onClickCancel = (e) => {
    handleClose();
  };

  return (
    <>

      <form className='m-form' onSubmit={() => { }} >

        <h3 className='t-center'>Nuevo Pokemon</h3>

        <div className='d-flex-sb'>
          <label>
            Nombre:
            <input type="text" value={pokemon.name} onChange={(e)=>setPokemon({...pokemon, name: e.target.value})} />
          </label>
          <label>
            Ataque:
            <input type="number" value={pokemon.attack} onChange={(e)=>setPokemon({...pokemon, attack: e.target.value})} />
          </label>
        </div>
        <div className='d-flex-sb'>
          <label>
            Imagen:
            <input type="url" value={pokemon.image} onChange={(e)=>setPokemon({...pokemon, image: e.target.value})} />
          </label>
          <label>
            Defensa:
            <input type="number" value={pokemon.defense} onChange={(e)=>setPokemon({...pokemon, defense: e.target.value})} />
          </label>
        </div>
        <div className='d-flex-sb'>
          <label>
            Puntos de golpe:
            <input type="number" value={pokemon.hp} onChange={(e)=>setPokemon({...pokemon, hp: e.target.value})} />
          </label>
          <label>
            Tipo:
            <input type="text" value={pokemon.type} onChange={(e)=>setPokemon({...pokemon, type: e.target.value})} />
          </label>
        </div>
        <br />
        <div className='d-flex-sa'>
          <button className="btn c-purple" type="button" onClick={ onClickSave }><FaSave /> Guardar</button>
          <button className="btn c-purple" type="button" onClick={ onClickCancel }><IoClose /> Cancelar</button>
        </div>
      </form>

    </>
  )
}
