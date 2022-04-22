import { Input } from '@nextui-org/react';
import CardPets from '../../common/components/card/Card';
import styles from './Pets.module.css';

const Pets = () => {
  return (
    <div className={styles['container']}>
        <div className={styles['container-search']}>
            <Input 
              label="Search" 
              type="search" 
              width='100%'
            />
        </div>
        <div className={styles['container-img']}>
            <CardPets/>
            <CardPets/>
            <CardPets/>
            <CardPets/>
            <CardPets/>
            <CardPets/>
            <CardPets/>
            <CardPets/>
            <CardPets/>
            <CardPets/>
            <CardPets/>
            <CardPets/>
        </div>
    </div>
  )
}

export default Pets