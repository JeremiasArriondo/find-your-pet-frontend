import { Checkbox, Input, Loading } from '@nextui-org/react';
import { FcSearch } from 'react-icons/fc';
import { useEffect, useState } from 'react';
import CardCustom from '../../common/components/card/CardCustom';
import ContainerCards from '../../common/components/containerCards/ContainerCards';
import { fetchWithToken } from '../../helpers/fetch';
import useFetch from '../../hooks/useFetch';
import styles from './Pets.module.css';
import Search from '../../common/components/search/Search';

const Pets = () => {
    
    const [search, setSearch] = useState('');

    const [publications, setPublications] = useState([]);

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

    return (
        <div className={styles.container}>
            <Search
                search={search}
                searchText={searchText}
                handleSearch={handleSearch}
            />
            <ContainerCards data={publications} />
        </div>
    );
};

export default Pets;
