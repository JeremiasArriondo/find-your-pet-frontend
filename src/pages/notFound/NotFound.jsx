import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound = () => {
    return (
        <div className={styles.container}>
            <div className={styles['container-text']}>
                <h2>¡Ups! La página a la cual desea acceder no existe</h2>
                <Link to={'/'}>
                    <button className={styles.button}>
                        Volver a inicio
                    </button>
                </Link>
            </div>

            <figure className={styles['container-img']}>
                <img src='/img/unicorn.svg' />
            </figure>
        </div>
    );
};

export default NotFound;
