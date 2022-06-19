import styles from './styles.module.css';

const CardCustom = ({description, image, typePublication, ...rest}) => {
  return (
    <div className={styles['container']}>
        <figure className={styles['container-img']}>
            <div className={styles['container-text']}>
              <h4>{typePublication}</h4>
            </div>
            <img src={image} alt={description} width={"100%"} />
            <figcaption>
                {description}
            </figcaption>
        </figure>
    </div>
  )
}

export default CardCustom;