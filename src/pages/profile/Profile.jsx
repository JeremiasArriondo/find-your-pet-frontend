import styles from './Profile.module.css';

const Profile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <h2>Mi perfil</h2>
        <ul>
          <li>Jeremias Arriondo</li>
          <li>jeremias98@gmail.com</li>
          <li>Tel: 11223344</li>
          <li>Cuidad: Rojas</li>
        </ul>
        <p>Info: usuario con experiencia, realiza posteos diariamente</p>
      </div>
      <div className={styles.publication}>
        Mis publicaciones
      </div>
    </div>
  )
}

export default Profile;