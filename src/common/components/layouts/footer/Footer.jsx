import { FcLike } from 'react-icons/fc';
import { CgSearchFound } from 'react-icons/cg';
import { MdSelectAll } from 'react-icons/md';
import { BiSearchAlt } from 'react-icons/bi';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { VscGithubInverted } from 'react-icons/vsc';
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.css';
/**
 * Este componente conforma el footer, teniendo una breve descripcion de la aplicacion
 * Y enlaces para contactar al desarollador
 */
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles['footer-container-nav']}>
                <div className={styles['footer-navigation']}>
                    <NavLink
                        to={'/pets'}
                        className={({ isActive }) =>
                            isActive ? styles.active : ''
                        }
                    >
                        <MdSelectAll size={'2rem'}/>
                    </NavLink>
                    <NavLink
                        to={'/find'}
                        className={({ isActive }) =>
                            isActive ? styles.active : ''
                        }
                    >
                        <CgSearchFound size={'2rem'}/>
                    </NavLink>
                    <NavLink
                        to={'/wanted'}
                        className={({ isActive }) =>
                            isActive ? styles.active : ''
                        }
                    >
                        <BiSearchAlt size={'2rem'} />
                    </NavLink>
                    <NavLink
                        to={'/help'}
                        className={({ isActive }) =>
                            isActive ? styles.active : ''
                        }
                    >
                        <FaMapMarkedAlt size={'2rem'}/>
                    </NavLink>
                </div>
            </div>
            <div className={styles.container}>
                <h5>Sobre ésta página: </h5>
                <p>
                    Ésta aplicación web está exclusivamente dedicada con amor
                    para nuestras mascotas que, quizás por alguna razón fuera de
                    nuestro alcance la estamos buscando, uso totalmente a
                    discreción y comprensión.
                </p>
                <hr />
                <div className={styles['container-info']}>
                    <p>
                        Desarrollado con <FcLike /> por{' '}
                        <a href='https://www.linkedin.com/in/jeremias-arriondo/'>
                            Jeremias Arriondo
                        </a>
                    </p>
                    <a href='https://github.com/JeremiasArriondo'>
                        <VscGithubInverted style={{ fontSize: '1.5rem' }} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
