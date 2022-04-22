import { NavLink } from "react-router-dom";
import { MdPets } from "react-icons/md";
import styles from './NavBar.module.css';
import { Avatar } from "@nextui-org/react";
/**
 * Este componente conforma la barra de navegación superior
 * En su contenido tiene el logo, los enlaces en la navegación
 * y el logo del icono del usuario
 */
const NavBar = () => {
    return (
      <div className={styles['container']}>
          <div className={styles['logo']}>
              <MdPets style={{fontSize: '2rem'}}/>
              <NavLink to={'/'}
                className={styles['navlink']}
              >
                <span>ENCUENTRA TU MASCOTA</span>
              </NavLink>
          </div>
          <div className={styles['container-section']}>
              <NavLink to={'/pets'} className={styles['navlink']}>Mascotas</NavLink>
              <NavLink to={'/'} className={styles['navlink']}>Perritos</NavLink>
              <NavLink to={'/'} className={styles['navlink']}>Gatitos</NavLink>
          </div>
          <Avatar />
      </div>
    )
}

export default NavBar;