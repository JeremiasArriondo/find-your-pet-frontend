import { useEffect, useState } from "react";
import ContainerCards from "../../common/components/containerCards/ContainerCards";
import NewPublication from "../../common/components/newPublication/NewPublication";
import useFetch from "../../hooks/useFetch";

const Encontrados = () => {
    
    const { data: petsFound, isLoading, error, refresh } = useFetch('publication/found', null, 'GET');
    
    const [publicationsFound, setPublicationsFound] = useState([]);
    
    useEffect(() => {
        if(petsFound?.data){
            setPublicationsFound(petsFound.data.publicationsFound)
        }
    }, [petsFound]);
    
    return (
        <div>
            <ContainerCards data={publicationsFound} isLoading={isLoading}/>
            <NewPublication refresh={refresh} />
    </div>
  )
};

export default Encontrados;