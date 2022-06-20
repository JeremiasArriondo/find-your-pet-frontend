import { Drawer } from '@mui/material';
import { Button } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/useAuth';
import useForm from '../../hooks/useForm';
import Register from '../register/Register';
// import LoginGoogle from './components/LoginGoogle';
import styles from './Login.module.css';

const Login = () => {

    const [visible, setVisible] = useState(false);

    const { loginUser, error, login } = useAuth();
    const navigate = useNavigate();

    const [formValues, handleInputChange] = useForm({
        email: '',
        password: ''
    });

    const { email, password } = formValues;

    const showModal = () => setVisible(!visible);

    const onFinish = (e) => {
        e.preventDefault();
        loginUser(email, password);
    }

    useEffect(() => {
        {login && navigate('/pets')};
    }, [login])
    

    return (
        <>
        {/* <LoginGoogle /> */}
        <div className={styles.container}>
            <div className={styles['content-login']}>
                <form className={styles['form-login']}
                    onSubmit={ onFinish }
                >
                    <h2>Iniciar sesión</h2>
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
                    { error
                        ? <p className={styles.error}>{error}</p>
                        : <br/>
                    }
                    <Button type='submit' color={'secondary'}>Ingresar</Button>
                    <h3>¿No tiene una cuenta?</h3>
                </form>
                <Button auto shadow onClick={showModal}
                    bordered color={'primary'}
                >
                    Registrese gratis
                </Button>

                <Drawer
                    anchor={'right'}
                    open={visible}
                    onClose={showModal}
                >
                    <Register closeModal={ showModal }/>
                </Drawer>

                {/* <Modal
                    closeButton
                    aria-labelledby="modal-title"
                    open={visible}
                    onClose={showModal}
                >
                    <Modal.Header>
                        <Text id="modal-title" b size={18}>Registrese gratis!</Text>
                    </Modal.Header>
                    <Register closeModal={ showModal }/>
                </Modal> */}
            </div>
        </div>
        </>
        
    );
};

export default Login;
