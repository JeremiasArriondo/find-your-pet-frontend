import { Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';
// import LoginGoogle from './components/LoginGoogle';
import styles from './Login.module.css';

const Login = () => {

    return (
        <>
        {/* <LoginGoogle /> */}
        <div className={styles.container}>
            <form className={styles['container-login']}>
                <h2>Inicia sesión</h2>
                <input type={'email'} placeholder='Ingresá tu email' />
                <input type={'password'} placeholder='Contraseña' />
                <Button>Ingresar</Button>
                <h3>¿No tiene una cuenta?<Link to={'/register'} className={styles['register']}>Registrese gratis!
                </Link></h3>
                
            </form>
        </div>
        </>
        
    );
};

export default Login;
