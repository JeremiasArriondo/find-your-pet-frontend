import { Outlet } from 'react-router-dom';
import CardPets from '../common/components/card/Card';
import NavBar from '../common/components/layouts/navbar/NavBar';
import styles from './Layout.module.css';

const Layout = () => {
  return (
    <div className={styles.container}>
        <NavBar/>
        <div className={styles.content}>
          <Outlet />
          {/* <div className={styles.grid}>
            <CardPets/>
            <CardPets/>
            <CardPets/>
            <CardPets/>
            <CardPets/>
            <CardPets/>
            <CardPets/>
            <CardPets/>
            <CardPets/>
            <CardPets/>
            <CardPets/>
            <CardPets/>
          </div> */}
        </div>
    </div>
  )
};

export default Layout;