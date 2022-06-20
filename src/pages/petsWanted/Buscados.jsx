import { useEffect, useState } from "react";
import ContainerCards from "../../common/components/containerCards/ContainerCards";
import NewPublication from "../../common/components/newPublication/NewPublication";
import useFetch from "../../hooks/useFetch";

const Buscados = () => {
    
    const { data: petsWanted, isLoading, error, refresh } = useFetch('publication/wanted', null, 'GET');
    
    const [publicationsWanted, setPublicationsWanted] = useState([]);
    
    useEffect(() => {
        if(petsWanted?.data){
            setPublicationsWanted(petsWanted.data.publicationsWanted)
        }
    }, [petsWanted]);
    console.log(petsWanted)
    return (
      <div>
        <ContainerCards data={publicationsWanted} isLoading={isLoading} />
        <NewPublication refresh={refresh} />
    </div>
  )
};

export default Buscados;