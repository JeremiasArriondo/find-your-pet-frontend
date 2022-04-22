import { Outlet } from 'react-router-dom';
import Footer from '../common/components/layouts/footer/Footer';
import NavBar from '../common/components/layouts/navbar/NavBar';

import styles from './Layout.module.css';
/**
 * Este componente es el layout principal de todas las paginas
 * Implementa una estructura sencilla
 * El componente Outlet de rrd ayuda a renderizar los componentes hijos
 * Dentro del contenido principal del layour
 * @returns 
 */
const Layout = () => {
  return (
    <div className={styles.container}>
        <NavBar/>
        <div className={styles.content}>
          <Outlet />
        </div>
        <Footer className={styles['footer']}/>
    </div>
  )
};

export default Layout;