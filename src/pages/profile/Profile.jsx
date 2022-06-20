import { Button, Dialog, DialogTitle } from '@mui/material';
import { Loading } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import swal from 'sweetalert';
import { useAuth } from '../../auth/useAuth';
import CardCustom from '../../common/components/card/CardCustom';
import NewPublication from '../../common/components/newPublication/NewPublication';
import { fetchWithToken } from '../../helpers/fetch';
import useFetch from '../../hooks/useFetch';
import styles from './Profile.module.css';

const Profile = () => {

    const { userContext } = useAuth();

    const {data: dataUser, error: errorUser} = useFetch(`user/${userContext.id}`);

    const [userData, setUserData] = useState({});

    const { isLoading, data, error, refresh } = useFetch('user/publications');

    const [userPublications, setUserPublications] = useState([]);

    const [open, setOpen] = useState(false);

    const showModal = () => setOpen(!open);
    
    useEffect(() => {
        if(data?.data){
            setUserPublications(data.data)
        };
    }, [data]);

    useEffect(() => {
        if(dataUser?.data){
            setUserData(dataUser.data)
        };
    }, [dataUser]);
    
    const deletePublication = (id) => {
        fetchWithToken(`publication/${id}`, {}, 'DELETE')
                .then((resp) => {
                    if(resp.status){
                        swal({
                            title: "Éxito",
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
            <div className={styles['profile-img']}>
                <img src='/img/perfil.png' width={100} height={100} alt='img perfil'/>
                {isLoading
                    ? <Loading color="secondary" size="md">Cargando...</Loading>
                    : (Object.keys(userData).length > 0 &&
                        <div>
                            {userData.fullName && <p>Hola {userData.fullName}!!</p>}
                            <p>Bienvenido a tu perfil</p>
                            {userData.email && <p>Email: {userData.email}</p>}
                            {userData.phone && <p>Tel: {userData.phone}</p>}
                        </div>)
                }
            </div>
            
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
                                    <button className={styles['delete-btn']}
                                        onClick={showModal}
                                    >Borrar</button>
                                    <Dialog onClick={showModal} open={open}>
                                        <DialogTitle>¿Seguro que desea borrar la publicación?</DialogTitle>
                                        <div className={styles['container-dialog']}>
                                            <button className={styles['cancel-btn']} onClick={showModal}>
                                                Cancelar
                                            </button>
                                            <button className={styles['delete-btn']}
                                                onClick={() => deletePublication(_id)}
                                            >Borrar</button>
                                        </div>
                                    </Dialog>
                                </div>                         
                            )
                        })
                    )
                    }
            </div>
            <NewPublication refresh={refresh}/>  
        </div>      
    </div>
    )
}

export default Profile;