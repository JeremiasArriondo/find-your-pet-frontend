import { Button } from '@nextui-org/react';
import styles from './Login.module.css';

const Login = () => {
    return (
        <div className={styles.container}>
            <form className={styles['container-login']}>
                <h2>Inicia sesión</h2>
                <input type={'email'} placeholder='Ingresá tu email' />
                <input type={'password'} placeholder='Contraseña' />
                <Button>Ingresar</Button>
            </form>
        </div>
    );
};

export default Login;
