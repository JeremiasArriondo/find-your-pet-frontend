import { Loading } from '@nextui-org/react';
import { Fragment, useEffect, useState } from 'react';
import swal from 'sweetalert';
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
                        swal({
                            title: "Éxitooo",
                            text: "Tu publicación fue eliminada con éxito!",
                            icon: "success",
                            timer: 3000
                        });
                        refresh();
                    } else{
                        swal({
                            title: "OOOPS!",
                            text: "No ha sido posible eliminar la publicación, reintente nuevamente",
                            icon: "error",
                            timer: 3000
                        })
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
        <div className={styles['container-publications']}>
            <h3>Mis publicaciones: </h3>
            <div className={styles['container-publication-img']}>
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
        
    </div>
    )
}

export default Profile;