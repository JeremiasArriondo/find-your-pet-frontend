import { Checkbox, Input, Loading } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import CardPets from '../../common/components/card/Card';
import useFetch from '../../hooks/useFetch';
import styles from './Pets.module.css';

const Pets = () => {

    const { data: posts, isLoading, error } = useFetch('publication/all', null, 'GET');

    const [publications, setPublications] = useState([]);

    useEffect(() => {
        if(posts?.data){
            setPublications(posts.data.publications)
        }
    }, [posts])

    return (
        <div className={styles.container}>
            <div className={styles['container-search']}>
                <Input
                    label='Busca por lo que sea'
                    type='search'
                    width='100%'
                    status='secondary'
                />
                <Checkbox
                    color='secondary'
                    labelColor='secondary'
                    initialChecked={true}
                >
                    Secondary
                </Checkbox>
            </div>
            
            <div className={styles['container-img']}>
               {isLoading
                    ? <Loading color="secondary" size="md">Cargando...</Loading>
                    : (publications?.length > 0 && publications?.map(({description, image, typePublication}) => {
                        return (
                            <CardPets
                                description={description}
                                image={image}
                                typePublication={typePublication}
                            />
                        )
                    })
                   )
                }
            </div>
        </div>
    );
};

export default Pets;
