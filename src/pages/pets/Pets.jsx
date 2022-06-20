import { Checkbox, Input, Loading } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import CardCustom from '../../common/components/card/CardCustom';
import ContainerCards from '../../common/components/containerCards/ContainerCards';
import { fetchWithToken } from '../../helpers/fetch';
import useFetch from '../../hooks/useFetch';
import styles from './Pets.module.css';

const Pets = () => {
    
    const [search, setSearch] = useState('');

    // const { data: posts, isLoading, error } = useFetch('publication/all', {search}, 'POST');

    const [publications, setPublications] = useState([]);

    const searchText = (e) => setSearch(e.target.value);

    // useEffect(() => {
    //     if(posts?.data){
    //         setPublications(posts.data.publications)
    //     }
    // }, [posts]);

    useEffect(() => {
        if(search){
            fetchWithToken('publication/all', {search: search}, 'POST')
                .then((res) => {
                    if(res.status){
                        setPublications(res.data.publications)
                        console.log(res.data)
                    }
                })
        } else {
            fetchWithToken('publication/all', {search:''}, 'POST')
                .then((res) => {
                    if(res.status){
                        setPublications(res.data.publications)
                        console.log(res.data)
                    }
                })
        }
    }, [search]);

    // console.log("FUERA DEL USEEFFECT", publications);
    // console.log(search)

    return (
        <div className={styles.container}>
            <div className={styles['container-search']}>
                <Input
                    label='Buscame'
                    type='search'
                    value={search}
                    onChange={(e) => searchText(e)}
                    width='100%'
                    status='secondary'
                />
            </div>
            <ContainerCards data={publications} />
        </div>
    );
};

export default Pets;
