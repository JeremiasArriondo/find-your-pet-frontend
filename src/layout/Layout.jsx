import { Outlet } from 'react-router-dom';
import Footer from '../common/components/layouts/footer/Footer';
import NavBar from '../common/components/layouts/navbar/NavBar';

import styles from './Layout.module.css';

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