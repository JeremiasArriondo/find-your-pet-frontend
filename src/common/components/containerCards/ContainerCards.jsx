import { Loading } from '@nextui-org/react';
import React from 'react';
import CardCustom from '../card/CardCustom';
import styles from './styles.module.css';

const ContainerCards = ({data, isLoading}) => {
    return (
        <div className={styles['container-img']}>
               {false
                    ? <Loading color="secondary" size="md">Cargando...</Loading>
                    : (data?.length > 0 && data?.map(({description, image, typePublication, _id}) => {
                        return (
                            <CardCustom
                                key={_id}
                                description={description}
                                image={image}
                                typePublication={typePublication}
                            />
                        )
                    })
                   )
                }
        </div>
    )
}

export default ContainerCards;