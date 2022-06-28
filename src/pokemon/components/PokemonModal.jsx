import { PokemonCreate } from "./PokemonCreate";
import { PokemonDelete } from "./PokemonDelete";
import { PokemonUpdate } from "./PokemonUpdate";

export const PokemonModal = ({ modal, handleClose }) => {

    return (
        <>
            <div className={modal.showModal?'modal-container show':'modal-container'}>
                <div className="modal">
                    <h1>Ventana Modal</h1>
                    {modal.type == 'Create' && <PokemonCreate handleClose={ handleClose } />}
                    {modal.type == 'Edit' && <PokemonUpdate handleClose={ handleClose } />}
                    {modal.type == 'Delete' && <PokemonDelete handleClose={ handleClose } />}
                </div>
            </div>
        </>
    );
}
