import { Button } from '@nextui-org/react';
import swal from 'sweetalert';
import { fetchWithToken } from '../../helpers/fetch';
import useForm from '../../hooks/useForm';
import styles from './Register.module.css';

const initialState = {
    name: '',
    lastname: '',
    email: '',
    password: '',
    passwordConfirm: ''
}

const Register = () => {

    const [ formValues, handleInputChange, resetFields] = useForm(initialState);

    const { name, lastname, email, password, passwordConfirm } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            fetchWithToken('user', formValues , 'POST')
					.then((resp) => {
						if (resp.status) {
							console.log('Usuario creado con éxito');
                            swal({
                                title: "Bienvenid@!!",
                                text: "Tu usuario fue creado con éxito! Ya puedes iniciar sesión con tu nueva cuenta",
                                icon: "success",
                            });
                            resetFields();
						} else {
							const [msg] = resp.errors;
							swal({
                                title: "OOOPS!",
                                text: `${msg.msg}`,
                                icon: "error",
                            });
						}
					})
					.catch(() => {
						console.log('No es posible crear el usuario');
					});
        } catch (error) {
            console.log(error)
        }
    };

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
                    onChange={ handleInputChange }    
                />
                <label htmlFor='Lastname'>Apellido: </label>
                <input
                    id='Lastname'
                    type='text'
                    name='lastname'
                    minLength={3}
                    placeholder='Ingresá tu apellido'
                    value={ lastname }
                    onChange={ handleInputChange }
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
                    onChange={ handleInputChange }
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
                    onChange={ handleInputChange }
                />
                {/* <label htmlFor='passwordConfirm'>Contraseña: </label>
                <input
                    id='passwordConfirm'
                    type='password'
                    name='passwordConfirm'
                    placeholder='Repetí la contraseña'
                    minLength={6}
                    autoComplete='off'
                    value={ passwordConfirm }
                    onChange={ handleInputChange }
                /> */}
                <Button style={{width: '100%'}} type='submit'>Registrar</Button>
            </form>
        </div>
  )
}

export default Register;