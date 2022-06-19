import { Button } from '@nextui-org/react';
import { NavLink } from 'react-router-dom';
import styles from './ContentTooltip.module.css';

const ContentTooltip = ({logout}) => {
    return (
        <div className={styles['container-content']}>
            <NavLink to={'/profile'}>
                <Button>Ir a Perfil</Button>
            </NavLink>
            <Button onClick={logout}>Cerrar sesión</Button>
        </div>
    );
};

export default ContentTooltip;
