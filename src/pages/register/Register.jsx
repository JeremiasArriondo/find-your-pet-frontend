import styles from './Register.module.css';

const Register = () => {
  return (
    <div className={styles['container']}>
        <form className={styles['container-register']}>
            <h1>Registro</h1>
            <label for='name'>Nombre: </label>
            <input type={'text'} name='name' placeholder='Ingresa tu nombre'/>
            <label for='lastName'>Apellido: </label>
            <input type={'text'} placeholder='Ingresa tu apellido'/>
            <label for='email'>Email: </label>
            <input type={'email'} placeholder='Ingresa tu correo'/>
            <label for='password'>Contraseña: </label>
            <input type='password' placeholder='Ingresá tu contraseña' />
            <label for='password'>Contraseña: </label>
            <input type='password' placeholder='Repetí la contraseña' />

        </form>
    </div>
  )
}

export default Register;