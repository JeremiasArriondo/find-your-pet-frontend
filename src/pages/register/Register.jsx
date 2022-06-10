import { Button } from '@nextui-org/react';
import useForm from '../../hooks/useForm';
import styles from './Register.module.css';

const Register = () => {

    const [ formValues, handleInputCHange] = useForm({
        name: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirm: ''
    });

    const { name,lastName, email, password, passwordConfirm } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log( formValues )
    }

    return (
        <div className={styles['container']}>
            <form className={styles['container-register']} onSubmit={ handleSubmit } >
                <h1>Registro</h1>
                <label htmlFor='Name'>Nombre: </label>
                <input
                    id='Name'
                    type='text'
                    name='name'
                    minLength={3}
                    placeholder='Ingresa tu nombre'
                    value={ name }
                    onChange={ handleInputCHange }    
                />
                <label htmlFor='LastName'>Apellido: </label>
                <input
                    id='LastName'
                    type='text'
                    name='lastName'
                    minLength={3}
                    placeholder='Ingresá tu apellido'
                    value={ lastName }
                    onChange={ handleInputCHange }
                />
                <label htmlFor='Email'>Email: </label>
                <input
                    id='Email'
                    type='email'
                    name='email'
                    required={true}
                    pattern= "(\w|^)[\w.\-]{0,25}@(hotmail|gmail)\.com"
                    placeholder='tucorreo@email.com'
                    value={ email }
                    title='Por favor, ingrese una dirección de correo válida'
                    onChange={ handleInputCHange }
                />
                <label htmlFor='Password'>Contraseña: </label>
                <input 
                    id='Password'
                    type='password'
                    name='password'
                    placeholder='Ingresá tu contraseña'
                    autoComplete='off'
                    minLength={6}
                    value={ password }
                    onChange={ handleInputCHange }
                />
                <label htmlFor='passwordConfirm'>Contraseña: </label>
                <input
                    id='passwordConfirm'
                    type='password'
                    name='passwordConfirm'
                    placeholder='Repetí la contraseña'
                    minLength={6}
                    autoComplete='off'
                    value={ passwordConfirm }
                    onChange={ handleInputCHange }
                />
                <Button style={{width: '100%'}} type='submit'>Registrar</Button>
            </form>
        </div>
  )
}

export default Register;