import { useEffect, useState } from 'react';
import { Loading } from '@nextui-org/react';
import ContainerCards from '../../common/components/containerCards/ContainerCards';
import { fetchWithToken } from '../../helpers/fetch';
import styles from './Pets.module.css';
import Search from '../../common/components/search/Search';
import NewPublication from '../../common/components/newPublication/NewPublication';

const Pets = () => {
    //Estado para manejar el texto en la busqueda
    const [search, setSearch] = useState('');
    //Estado para manejar la coleccion de publicaciones
    const [publications, setPublications] = useState([]);
    //Estado para hacer una recarga de las publicaciones
    const [refreshPublications, setRefreshPublications] = useState(false);
    //Estado para manejar el resultado total de las busquedas
    const [result, setResult] = useState(null);
    //Estado de carga de una punlicacion
    const [isLoading, setIsLoading] = useState(null);

    //Estado para manejar el limite y el salto en la paginación
    const [limit, setLimit] = useState(8);
    const [offset, setOffset] = useState(0);

    const fetchPublication = (limit, offset) => {
        setIsLoading(true);
        fetchWithToken(`publication/all?limit=${limit}&offset=${offset}`, {search:''}, 'POST')
            .then((res) => {
                if(res.status){
                    setPublications(res.data.publications);
                    setResult(null);
                    setIsLoading(false);
                }
            });
    }

    const searchText = (text) => {
        if(text.trim().length > 0){
            setSearch(text);
        } else{
            setSearch('');
        }
    };

    const handleSearch = () => {
        if(search.trim().length >= 3 ){
            setIsLoading(true);
            fetchWithToken('publication/all', {search: search}, 'POST')
            .then((res) => {
                if(res.status){
                    setPublications(res.data.publications);
                    setResult(res.data.total);
                    setIsLoading(false);
                };
            });    
        }
    }

    const handleSearchOnEnter = event => {
        if(search.trim().length >= 3 && event.key === 'Enter'){
            setIsLoading(true);
            fetchWithToken('publication/all', {search: search}, 'POST')
            .then((res) => {
                if(res.status){
                    setPublications(res.data.publications);
                    setResult(res.data.total);
                    setIsLoading(false);
                };
            });    
        }
    }

    const refresh = () => setRefreshPublications(true);

    useEffect(() => {
        if(search.length < 1){
            setIsLoading(true);
            fetchWithToken(`publication/all?limit=${limit}&offset=${offset}`, {search:''}, 'POST')
            .then((res) => {
                if(res.status){
                    setPublications(res.data.publications);
                    setResult(null);
                    setIsLoading(false);
                }
            });
        }
    }, [search]);

    useEffect(() => {
        if(refreshPublications){
            setIsLoading(true);
            fetchWithToken('publication/all', {search:''}, 'POST')
            .then((res) => {
                if(res.status){
                    setPublications(res.data.publications);
                    setResult(null);
                    setIsLoading(false);
                }
            });
        }
    }, [refreshPublications]);

    useEffect(() => {
        fetchPublication(limit, offset);
    }, [limit, offset]);
    
    return (
        <div className={styles.container}>
            <Search
                search={search}
                searchText={searchText}
                handleSearch={handleSearch}
                result={result}
                handleSearchOnEnter={handleSearchOnEnter}
            />
            <ContainerCards data={publications} isLoading={isLoading}/>
            <NewPublication refresh={refresh} />
        </div>
    );
};

export default Pets;
