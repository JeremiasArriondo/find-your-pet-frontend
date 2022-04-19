import NavBar from '../common/components/layouts/navbar/NavBar';
import styles from './Layout.module.css';

const Layout = () => {
  return (
    <div className={styles.container}>
        <NavBar/>
    </div>
  )
};

export default Layout;