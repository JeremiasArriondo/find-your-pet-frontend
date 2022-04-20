import React from 'react';
import { Modal, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";
import styles from './Login.module.css';

const Login = () => {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
      setVisible(false);
      console.log("closed");
    };
    return (
        <div className={styles['container']}>
            <form className={styles['container-login']}>
                <h2>Inicia sesión</h2>
                <input type={'email'} placeholder='Ingresá tu email'/>
                <input type={'password'} placeholder='Contraseña'/>
                <Button>
                    Ingresar
                </Button>
            </form>
            
        </div>
  )
}

export default Login