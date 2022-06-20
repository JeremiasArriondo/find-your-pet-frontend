import { useEffect, useState } from "react";
import ContainerCards from "../../common/components/containerCards/ContainerCards";
import NewPublication from "../../common/components/newPublication/NewPublication";
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
        <NewPublication />
        <ContainerCards data={publicationsWanted} isLoading={isLoading} />
    </div>
  )
};

export default Buscados;