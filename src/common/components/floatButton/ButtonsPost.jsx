import { Button, Checkbox, Dropdown, Input, Modal, Text } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { FcAddImage } from "react-icons/fc";
import { useAuth } from "../../../auth/useAuth";
import useForm from "../../../hooks/useForm";
import styles from './styles.module.css';


const ButtonsPost = () => {
    const [open, setOpen] = useState(false);

    const [file, setFile] = useState(null);
    const [fileDataURL, setFileDataURL] = useState({});

    const { userContext } = useAuth()
    
    const [values, handleInputChange] = useForm({
        description: '',
        image: '',
        contactPhone: '',
        place: '',
        typePublication: 'ENCONTRADO',
    })

    const {description, image, contactPhone, place, typePublication} = values;

    const showModal = () => setOpen(!open);

    const submitPublication = (e) => {
        e.preventDefault();
        console.log(values)
    }

    const fileUpload = (e) => {
        setFile(e.target.files[0]);
        setFilePreview({filepreview:URL.createObjectURL(e.target.files[0])})
    }

    useEffect(() => {
        let fileReader, isCancel = false;
        if (file) {
          fileReader = new FileReader();
          fileReader.onload = (e) => {
            const { result } = e.target;
            if (result && !isCancel) {
              setFileDataURL(result)
            }}
          fileReader.readAsDataURL(file);
        }
        return () => {
          isCancel = true;
          if (fileReader && fileReader.readyState === 1) {
            fileReader.abort();
          }
        }
    }, [file]);

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
                    onSubmit={submitPublication}
                >
                    <legend className={styles['legend']}>Crea una publicación</legend>
                    <label htmlFor="imagen" >Imagen: </label>
                    <input
                        type="file"
                        id="imagen"
                        name="imagen"   
                        onChange={ (e) => fileUpload(e) }
                        required
                    />
                    <img src={fileDataURL} style={{objectFit: 'cover'}} width={300} height={150} />
                    <label htmlFor="contactPhone" >Contacto: </label>
                    <input
                        type="text"
                        id="contactPhone"
                        name="contactPhone"
                        value={contactPhone}
                        onChange={ handleInputChange }
                    />
                    <label htmlFor="place" >Ubicación (Opcional): </label>
                    <input
                        type="text"
                        id="place"
                        name="place"
                        value={place}
                        onChange={ handleInputChange }
                    />
                    <label htmlFor="typePublication">Publicacion tipo: </label>
                    <select
                        id="typePublication"
                        name="typePublication"
                        onChange={ handleInputChange }
                        required
                    >
                        <option value={'ENCONTRADO'} >Encontrado</option>
                        <option value={'BUSCADO'} >Buscado</option>
                    </select>
                    
                    <label htmlFor="description">Descripción: </label>
                    <textarea
                        id="description"
                        name="description"
                        required
                        value={description}
                        onChange={ handleInputChange }
                    />
                    <input type={'submit'} title='sss'/>
                </form>
            </Modal>
        </div>
    )
};

export default ButtonsPost