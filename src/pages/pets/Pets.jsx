import { useEffect, useState } from 'react';
import { Loading } from '@nextui-org/react';
import ContainerCards from '../../common/components/containerCards/ContainerCards';
import { fetchWithToken } from '../../helpers/fetch';
import styles from './Pets.module.css';
import Search from '../../common/components/search/Search';
import NewPublication from '../../common/components/newPublication/NewPublication';

const Pets = () => {
    
    const [search, setSearch] = useState('');

    const [publications, setPublications] = useState([]);

    const [refreshPublications, setRefreshPublications] = useState(false);

    const [result, setResult] = useState(null);

    const [isLoading, setIsLoading] = useState(null);

    const searchText = (text) => {
        setSearch(text);
    };

    const handleSearch = () => {
        if(search.trim().length >= 3){
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
            fetchWithToken('publication/all', {search:''}, 'POST')
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
    }, [refreshPublications])
    
    return (
        <div className={styles.container}>
            <Search
                search={search}
                searchText={searchText}
                handleSearch={handleSearch}
                result={result}
            />
            <ContainerCards data={publications} isLoading={isLoading}/>
            <NewPublication refresh={refresh} />
        </div>
    );
};

export default Pets;
