import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FaSave, IoClose } from 'react-icons/all';
import { clearPokemonFindById, updatePokemon } from '../../store/slices/pokemon/thunks';

export const PokemonUpdate = ({ handleClose }) => {

  // STORE
  const dispatch = useDispatch();
  const { pokemonFindById } = useSelector(state => state.pokemons);

  // FORM
  const [form, setForm] = useState({ name:'',image:'',attack:0,defense:0,hp:0,type:'' });
  const { name,image,attack,defense,hp,type } = form;

  // EVENT BUTTON
  const onClickEdit = () => {
    dispatch( updatePokemon( form ) );
    handleClose();
  }
  const onClickCancel = () => {
    dispatch( clearPokemonFindById() );
    handleClose();
  }

  // SETTING VALUES FORM
  useEffect(() => {
    if ( pokemonFindById && pokemonFindById.isComplete ) {
      setForm({
        name: pokemonFindById.name, 
        image: pokemonFindById.image,
        attack: pokemonFindById.attack,
        defense: pokemonFindById.defense,
        hp: pokemonFindById.hp,
        type: pokemonFindById.type 
      });
    }
  }, [ pokemonFindById ]);

  return (
    <>

      <form className='m-form' onSubmit={() => { }} >

        <h3 className='t-center'>Editar Pokemon</h3>

        <div className='d-flex-sb'>
          <label>
            Nombre:
            <input type="text" value={name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          </label>
          <label>
            Ataque:
            <input type="number" value={attack} onChange={(e) => setForm({ ...form, attack: e.target.value })} />
          </label>
        </div>
        <div className='d-flex-sb'>
          <label>
            Imagen:
            <input type="url" value={image} onChange={(e) => setForm({ ...form, image: e.target.value })} />
          </label>
          <label>
            Defensa:
            <input type="number" value={defense} onChange={(e) => setForm({ ...form, defense: e.target.value })} />
          </label>
        </div>
        <div className='d-flex-sb'>
          <label>
            Puntos de golpe:
            <input type="number" value={hp} onChange={(e) => setForm({ ...form, hp: e.target.value })} />
          </label>
          <label>
            Tipo:
            <input type="text" value={type} onChange={(e) => setForm({ ...form, type: e.target.value })} />
          </label>
        </div>
        <br />
        <div className='d-flex-sa'>
          <button className="btn c-purple" type="button" onClick={ onClickEdit }><FaSave /> Guardar</button>
          <button className="btn c-purple" type="button" onClick={ onClickCancel }><IoClose /> Cancelar</button>
        </div>
      </form>

    </>
  )
}
