import { Outlet } from 'react-router-dom';
import NavBar from '../common/components/layouts/navbar/NavBar';
import styles from './Layout.module.css';

const Layout = () => {
  return (
    <div className={styles.container}>
        <NavBar/>
        <div className={styles.content}>
          <Outlet />
        </div>
    </div>
  )
};

export default Layout;