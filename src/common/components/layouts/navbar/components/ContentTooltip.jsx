import { Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import styles from './ContentTooltip.module.css';

const ContentTooltip = () => {
    return (
        <div className={styles['container-content']}>
            <Link to={'/profile'}>
                <Button>Ir a Perfil</Button>
            </Link>
            <Link to={'/login'}>
                <Button>Cerrar sesión</Button>
            </Link>
        </div>
    );
};

export default ContentTooltip;
