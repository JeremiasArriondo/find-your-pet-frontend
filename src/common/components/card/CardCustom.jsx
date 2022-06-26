
import { Modal } from '@nextui-org/react';
import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './styles.module.css';

const CardCustom = ({description, image, typePublication, contactPhone}) => {

    const [openImg, setOpenImg] = useState(false);

    const showImg = () => setOpenImg(true);

    const closeImg = () => setOpenImg(false);
  
    const wspMessage = (phone, text = null) => {
		phone = phone.replace(' ', '');
		phone = phone.replace('+', '');
		let urlApi = 'https://api.whatsapp.com/send?phone=' + phone;
		if (text) {
			urlApi += '&text=' + text;
		}
		return urlApi;
	};

    return (
    <div className={styles['container']}>
        <figure className={styles['container-img']}>
            <div className={styles['container-text']}>
              <h4>{typePublication}</h4>
            </div>
            <div onClick={showImg}>
                <img src={image} alt={description} width={"100%"} />
            </div>
            <Modal
                open={openImg}
                onClose={closeImg}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <img src={image} alt={description} />
            </Modal>
            <figcaption>
                {description}
                {contactPhone &&
                    <a
                        href={wspMessage(contactPhone)}
                        target={'_blank'}
                        rel={'noreferrer'}
                    >
                        <p>Contactar: <FaWhatsapp size={'.8rem'} style={{color: 'green'}} /> {contactPhone}</p>
                    </a>
                }
            </figcaption>
        </figure>
        
    </div>
  )
}

export default CardCustom;