import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getPokemons, pokemonFindById } from "../../store/slices/pokemon/thunks";
import { MdDeleteForever, BiEditAlt, IoAdd } from 'react-icons/all';
import { PokemonModal } from "./PokemonModal";

export const PokemonList = () => {

  // STORE
  const dispatch = useDispatch();
  const { isLoading, pokemons } = useSelector(state => state.pokemons);

  // SEARCH
  const [search, setSearch] = useState('');
  const onSerach = (e) => {
    e.preventDefault();
    dispatch( getPokemons(search) );
  };

  // MODAL
  const [modal, setModal] = useState({showModal:false,type:''});
  const handleClose = () => setModal({showModal:false,type:''});

  // MODAL EVENTS
  const onCreatePokemon = () => {
    setModal({showModal:true,type:'Create'});
  };
  const onEditPokemon = (id) => {
    dispatch( pokemonFindById(id) );
    setModal({showModal:true,type:'Edit'});
  };
  const onDeletePokemon = (id) => {
    dispatch( pokemonFindById(id) );
    setModal({showModal:true,type:'Delete'});
  };

  // LOAD POKEMONS
  useEffect(() => {
    dispatch(getPokemons(search));
  }, []);

  return (
    <div className="container">

      {
        modal.showModal && <PokemonModal modal={ modal } handleClose={ handleClose } />
      }

      <h1>Listado de Pokemon</h1>

      <div className="d-flex-sb">
        <form onSubmit={onSerach} >
          <input className="input-icon" type="text" placeholder="&#xf002; Buscar" onChange={(e)=>setSearch(e.target.value)} />
        </form>
        <button className="btn c-purple" onClick={ onCreatePokemon }><IoAdd className="c-while" /> Nuevo</button>
      </div>

      <br />

      <span>{isLoading ? 'Cargando..' : ''}</span>

      <br />

      <table className="tb-pokemon">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Imagenes</th>
            <th>Ataque</th>
            <th>Defensa</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            pokemons.map(({ id, name, image, attack, defense }) => (
              <tr key={id}>
                <td>{name}</td>
                <td><img height={50} width={50} src={image}></img></td>
                <td>{attack}</td>
                <td>{defense}</td>
                <td>
                  <BiEditAlt className="btn-icon c-purple" onClick={ () => { onEditPokemon(id) } } />
                  <MdDeleteForever className="btn-icon c-purple" onClick={() => onDeletePokemon(id)} />
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>

    </div>

  )
}
