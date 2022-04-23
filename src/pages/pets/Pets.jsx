import { Checkbox, Input } from '@nextui-org/react';
import CardPets from '../../common/components/card/Card';
import styles from './Pets.module.css';

const Pets = () => {
  return (
    <div className={styles['container']}>
        <div className={styles['container-search']}>
            <Input 
              label="Busca por lo que sea" 
              type="search" 
              width='100%'
              status="secondary"
            />
            <Checkbox color="secondary" labelColor="secondary" initialChecked={true}>
              Secondary
            </Checkbox>
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