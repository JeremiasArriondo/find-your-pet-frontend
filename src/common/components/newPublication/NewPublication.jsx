import { Modal } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FcAddImage } from "react-icons/fc";
import { MdDoubleArrow } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import swal from "sweetalert";
import { fetchWithToken } from "../../../helpers/fetch";
import useForm from "../../../hooks/useForm";
import styles from './styles.module.css';


const NewPublication = ({refresh}) => {
    const [open, setOpen] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const [btnDisabled, setBtnDisabled] = useState(false);
    const [file, setFile] = useState(null);
    const [fileDataURL, setFileDataURL] = useState(null);
    
    const [values, handleInputChange, resetFields] = useForm({
        description: '',
        contactPhone: '',
        place: '',
        typePublication: 'ENCONTRADO',
    })

    const {description, contactPhone, place, typePublication} = values;

    const showModal = () => setOpen(true);

    const hideModal = () => setOpen(false);

    const submitPublication = (e) => {
        e.preventDefault();
        setBtnDisabled(true);
        try {
            //Instanciación del objeto form data
            const formData = new FormData();
            // formData.append(description, contactPhone, place, typePublication)
            formData.append("description", description);
            formData.append("contactPhone", contactPhone);
            formData.append("place", place ?? '');
            formData.append("typePublication", typePublication);
            formData.append("imagen", file);
            fetchWithToken('publication',formData,'POST')
                    .then((res) => {
                        if (res.status){
                            console.log('publicacion creada');
                            swal({
                                title: "Excelente!",
                                text: "La publicación fue creada con éxito",
                                icon:"success",
                                time: 3000
                            });
                            resetFields();
                            setBtnDisabled(false);
                            setFile(null);
                            setOpen(false);
                            setFileDataURL(null);
                            refresh();
                        } else {
                            const [msg] = res.errors;
                            swal({
                                title: "OOOPS!",
                                text: `${msg.msg}`,
                                icon: "error",
                                timer: 3000
                            });
                            setBtnDisabled(false);
                        }
                    })
                    .catch((e) => {
                        console.log(e)
                        swal({
                            title: "Sorry",
                            text: "Ha ocurrido un error, por favor reintente nuevamente más tarde",
                            icon: "error",
                            timer: 5000
                        })
                    });
        } catch (error) {
            console.log(error)
        }
    };

    const fileUpload = (e) => {
        setFile(e.target.files[0]);
    };

    const cancelPost = () => {
        setFile(null);
        setFileDataURL(null);
        resetFields();
        hideModal();
    };

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
        <div className={` ${styles[`position`]} ${styles[`${showButton && 'show'}`]}`}>
            <div className={styles[`container-menu`]}>
                <button onClick={() => setShowButton(!showButton)}
                    className={styles['double-arrow']}
                >
                    <MdDoubleArrow size={'2.8rem'}/>
                </button>
                <div className={styles[`container-menu-button`]}>
                    <button className={styles['button']}
                        onClick={showModal}
                    >
                        <FcAddImage
                            size={'2.8rem'}
                        />
                    </button>
                    <NavLink to={'/profile'}>
                        <button className={styles['button']}>
                            <RiDeleteBin5Line size={'3rem'} style={{color: 'red'}} />
                        </button>
                    </NavLink>
                </div> 
            </div>
            
            <Modal
                open={open}
                onClose={hideModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <form
                    className={styles['container-form']}
                    onSubmit={submitPublication}
                    encType="multipart/form-data"
                >
                    <legend className={styles['legend']}>Crea una publicación</legend>
                    <label htmlFor="imagen" >Imagen: </label>
                    <fieldset className={styles['container-imagen']}>
                        <input
                            type="file"
                            id="imagen"
                            name="imagen"   
                            onChange={ (e) => fileUpload(e) }
                            required
                            className={styles['custom-file-input']}
                        />
                        {fileDataURL &&
                            <img src={fileDataURL} style={{objectFit: 'cover'}} width={120} height={60} />}
                    </fieldset>
                    
                    <label htmlFor="contactPhone" >Contacto WhatsApp(<FaWhatsapp />): </label>
                    <input
                        type="text"
                        id="contactPhone"
                        name="contactPhone"
                        placeholder="Ej. +54 2457000000"
                        required
                        value={contactPhone}
                        onChange={ handleInputChange }
                    />
                    <label htmlFor="place" >Ubicación (Opcional): </label>
                    <input
                        type="text"
                        id="place"
                        name="place"
                        placeholder="Ciudad, barrio, etc"
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
                        placeholder='Ingrese aquí una breve pero clara descripción del animal e información adicional'
                    />
                    <div className={styles['container-btn']}>
                        <button type="reset" onClick={cancelPost} className={styles['cancel-btn']} >Cancelar</button>
                        <button type="submit" disabled={
                            btnDisabled
                        }
                        className={`${styles['submit-btn']} ${btnDisabled ? styles['disabled'] : ''}`}
                        >{btnDisabled ? 'Cargando...': 'Guardar'}</button>
                    </div>
                </form>
            </Modal>
        </div>
    )
};

export default NewPublication;