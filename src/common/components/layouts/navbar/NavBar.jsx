import { NavLink } from "react-router-dom";
import styles from './NavBar.module.css';

const NavBar = () => {
    return (
      <div className={styles.container}>
          {/* <NavLink to='/'>Home</NavLink> */}
          <div>
              Encuentra tu mascota!!
          </div>
          <div className={styles['container-section']}>
              <a href='/'>Mascotas</a>
              <a href='/'>Perritos</a>
              <a href='/'>Gatitos</a>
          </div>
          <a href='/'>Login</a>
      </div>
    )
}

export default NavBar