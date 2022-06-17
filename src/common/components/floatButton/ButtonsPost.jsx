import { Button, Checkbox, Dropdown, Input, Modal, Text } from "@nextui-org/react";
import { useState } from "react";
import { FcAddImage } from "react-icons/fc";
import styles from './styles.module.css';

const ButtonsPost = () => {

    const [open, setOpen] = useState(false);

    const showModal = () => setOpen(!open);

    return (
        <div className={styles['position']}>
            <button className={styles['button']}
                onClick={showModal}
            >
                <FcAddImage
                    size={'2.5rem'}
                />
            </button>
            <Modal
                open={open}
                onClose={showModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <form
                    className={styles['container-form']}
                >
                    <legend className={styles['legend']}>Crea una publicación</legend>
                    <label htmlFor="imagen" >Imagen: </label>
                    <input
                        type="file"
                        id="imagen"
                        name="imagen"   
                        required
                    />
                    <label htmlFor="contactPhone" >Contacto: </label>
                    <input
                        type="text"
                        id="contactPhone"
                        name="contactPhone"   
                    />
                    <label htmlFor="place" >Ubicación (Opcional): </label>
                    <input
                        type="text"
                        id="place"
                        name="place"   
                    />
                    <label htmlFor="typePublication">Publicacion tipo: </label>
                    <select
                        id="typePublication"
                        name="typePublication"
                        required
                    >
                        <option value={'ENCONTRADO'}>Encontrado</option>
                        <option value={'BUSCADO'}>Buscado</option>
                    </select>
                    
                    <label htmlFor="description">Descripción: </label>
                    <textarea
                        id="description"
                        name="description"
                        required
                    />
                    <input type={'submit'}/>
                </form>
            </Modal>
        </div>
    )
};

export default ButtonsPost