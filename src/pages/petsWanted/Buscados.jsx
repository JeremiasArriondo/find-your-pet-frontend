import { useEffect, useState } from "react";
import ContainerCards from "../../common/components/containerCards/ContainerCards";
import ButtonsPost from "../../common/components/floatButton/ButtonsPost";
import useFetch from "../../hooks/useFetch";
// import styles from './styles.module.css';

const Buscados = () => {
    
    const { data: petsWanted, isLoading, error } = useFetch('publication/wanted', null, 'GET');
    
    const [publicationsWanted, setPublicationsWanted] = useState([]);
    
    useEffect(() => {
        if(petsWanted?.data){
            setPublicationsWanted(petsWanted.data.publicationsWanted)
        }
    }, [petsWanted]);
    console.log(petsWanted)
    return (
      <div>
        <ButtonsPost />
        <ContainerCards data={publicationsWanted} />
    </div>
  )
};

export default Buscados;