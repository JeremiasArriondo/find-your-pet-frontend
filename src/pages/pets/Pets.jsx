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

    const searchText = (text) => {
        setSearch(text);
    };

    const handleSearch = () => {
        if(search.length >= 3){
            fetchWithToken('publication/all', {search: search}, 'POST')
            .then((res) => {
                if(res.status){
                    setPublications(res.data.publications);
                };
            })
        }
    }

    const refresh = () => setRefreshPublications(true);

    useEffect(() => {
        if(search.length <= 1){
            fetchWithToken('publication/all', {search:''}, 'POST')
            .then((res) => {
                if(res.status){
                    setPublications(res.data.publications)
                }
            });
        }
    }, [search]);

    useEffect(() => {
        if(refreshPublications){
            fetchWithToken('publication/all', {search:''}, 'POST')
            .then((res) => {
                if(res.status){
                    setPublications(res.data.publications)
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
            />
            <ContainerCards data={publications} />
            <NewPublication refresh={refresh} />
        </div>
    );
};

export default Pets;
