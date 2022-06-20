import { useEffect, useState } from "react";
import ContainerCards from "../../common/components/containerCards/ContainerCards";
import ButtonsPost from "../../common/components/floatButton/ButtonsPost";
import useFetch from "../../hooks/useFetch";
import styles from './styles.module.css';

const Encontrados = () => {
    
    const { data: petsFound, isLoading, error } = useFetch('publication/found', null, 'GET');
    
    const [publicationsFound, setPublicationsFound] = useState([]);
    
    useEffect(() => {
        if(petsFound?.data){
            setPublicationsFound(petsFound.data.publicationsFound)
        }
    }, [petsFound]);
    
    return (
      <div className={styles.container}>
        <ButtonsPost />
        <ContainerCards data={publicationsFound} />
    </div>
  )
};

export default Encontrados;