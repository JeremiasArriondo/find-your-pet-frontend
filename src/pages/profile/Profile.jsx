import { Loading } from '@nextui-org/react';
import { Fragment, useEffect, useState } from 'react';
import CardCustom from '../../common/components/card/CardCustom';
import { fetchWithToken } from '../../helpers/fetch';
import useFetch from '../../hooks/useFetch';
import styles from './Profile.module.css';

const Profile = () => {

    const { isLoading, data, error, refresh } = useFetch('user/publications');

    const [userPublications, setUserPublications] = useState([]);
    
    useEffect(() => {
        if(data?.data){
            setUserPublications(data.data)
        }
    }, [data])
    
    const deletePublication = (id) => {
        fetchWithToken(`publication/${id}`, {}, 'DELETE')
                .then((resp) => {
                    if(resp.status){
                        console.log('Eliminado con exito')
                    } else{
                        console.log('NO SE PUDO ELIMINAR')
                    };
                })
                .catch((e) => {
                    console.log(e)
                })
    };
    
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
        <div className={styles['container-publication']}>
            {isLoading
                    ? <Loading color="secondary" size="md">Cargando...</Loading>
                    : (userPublications?.length > 0 && userPublications?.map(({description, image, typePublication, _id}) => {
                        return (
                            <div
                                key={_id}
                                className={styles['container-btn']}
                            >
                                <CardCustom
                                    description={description}
                                    image={image}
                                    typePublication={typePublication}
                                />
                                <button className={styles['cancel-btn']}
                                    onClick={() => deletePublication(_id)}
                                >Borrar</button>
                            </div>                         
                        )
                    })
                   )
                }
        </div>
    </div>
    )
}

export default Profile;