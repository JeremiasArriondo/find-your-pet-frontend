import { FcSearch } from 'react-icons/fc';
import styles from './Search.module.css';

const Search = ({search, searchText, handleSearch}) => {
    return (
        <div className={styles['container-search']}>
            <div className={styles['container-search-btn']}>
                <input
                    name='search'
                    value={search}
                    placeholder='Buscame...'
                    onChange={(e) => searchText(e.target.value)}
                    width='100%'
                    minLength={3}
                />
                <button onClick={handleSearch}>
                    <FcSearch size={'1.2rem'}/>
                </button>
            </div>
            {search.length < 3  && search.length > 0 && <p>Ingrese más de 2 caracteres para buscar</p>}
        </div>
    )
};

export default Search;