import { Loading } from '@nextui-org/react';
import React from 'react';
import CardCustom from '../card/CardCustom';
import styles from './styles.module.css';

const ContainerCards = ({data, isLoading = false}) => {
    return (
        <div className={styles['container-img']}>
               {isLoading
                    ? <Loading color="secondary" size="md">Cargando...</Loading>
                    : (data?.length > 0 && data?.map(({description, image, typePublication, contactPhone, _id}) => {
                        return (
                            <CardCustom
                                key={_id}
                                description={description}
                                image={image}
                                typePublication={typePublication}
                                contactPhone={contactPhone}
                            />
                        )
                    })
                   )
                }
        </div>
    )
}

export default ContainerCards;