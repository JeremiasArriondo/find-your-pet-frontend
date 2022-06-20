import { NavLink, useNavigate } from 'react-router-dom';
import { MdPets } from 'react-icons/md';
import styles from './NavBar.module.css';
import { Avatar, Tooltip } from '@nextui-org/react';
import ContentTooltip from './components/ContentTooltip';
import { useAuth } from '../../../../auth/useAuth';
/**
 * Este componente conforma la barra de navegación superior
 * En su contenido tiene el logo, los enlaces en la navegación
 * y el logo del icono del usuario
 */
const NavBar = () => {

    const { logoutUser } = useAuth();

    const navigate = useNavigate();

    const handleLogout = () => {
        logoutUser();
        navigate('/login');
    } 

    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <MdPets style={{ fontSize: '2rem' }} />
                <NavLink to={'/pets'} className={styles.navlink}>
                    <span>ENCUENTRA TU MASCOTA</span>
                </NavLink>
            </div>
            <div className={styles['container-section']}>
                <NavLink
                    to={'/pets'}
                    className={({ isActive }) =>
                        isActive ? styles.active : ''
                    }
                >
                    Mascotas
                </NavLink>
                <NavLink
                    to={'/found'}
                    className={({ isActive }) =>
                        isActive ? styles.active : ''
                    }
                >
                    Encontradas
                </NavLink>
                <NavLink
                    to={'/wanted'}
                    className={({ isActive }) =>
                        isActive ? styles.active : ''
                    }
                >
                    Buscadas
                </NavLink>
                <NavLink
                    to={'/help'}
                    className={({ isActive }) =>
                        isActive ? styles.active : ''
                    }
                >
                    Ayuda
                </NavLink>
            </div>
            <Tooltip placement='bottomEnd' content={<ContentTooltip logout={handleLogout} />}>
                <Avatar
                    pointer
                    src='/img/perfil.png'
                    color='gradient'
                    bordered
                />
            </Tooltip>
        </div>
    );
};

export default NavBar;
