import { Button } from '@nextui-org/react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/useAuth';
import useForm from '../../hooks/useForm';
// import LoginGoogle from './components/LoginGoogle';
import styles from './Login.module.css';

const Login = () => {

    const { loginUser, error } = useAuth();
    const navigate = useNavigate();

    const [formValues, handleInputChange] = useForm({
        email: '',
        password: ''
    });

    const { email, password } = formValues;

    const onFinish = (e) => {
        e.preventDefault();
        loginUser(email, password);
        navigate('/');
    }

    return (
        <>
        {/* <LoginGoogle /> */}
        <div className={styles.container}>
            <form className={styles['container-login']}
                onSubmit={ onFinish }
            >
                <h2>Inicia sesión</h2>
                <input
                    type={'email'}
                    placeholder='Ingresá tu email'
                    name='email'
                    required={true}
                    pattern= "(\w|^)[\w.\-]{0,25}@(hotmail|gmail)\.com"
                    value={ email }
                    onChange={ handleInputChange }
                />
                <input
                    type={'password'}
                    placeholder='Contraseña'
                    name='password'
                    autoComplete='off'
                    required
                    value= { password }
                    onChange={ handleInputChange }
                />
                <Button type='submit'>Ingresar</Button>
                <h3>¿No tiene una cuenta?<Link to={'/register'} className={styles['register']}>Registrese gratis!
                </Link></h3>
            </form>
        </div>
        </>
        
    );
};

export default Login;
