import { FcSearch } from 'react-icons/fc';
import styles from './Search.module.css';

const Search = ({search, searchText, handleSearch, handleSearchOnEnter, result}) => {
    return (
        <div className={styles['container-search']}>
            <div className={styles['container-search-btn']}>
                <input
                    name='search'
                    value={search}
                    placeholder='Buscame...'
                    onChange={(e) => searchText(e.target.value)}
                    onKeyDown={(e) => handleSearchOnEnter(e)}
                    width='100%'
                    minLength={3}
                />
                <button onClick={handleSearch}>
                    <FcSearch size={'1.2rem'}/>
                </button>
            </div>
            {search.length < 3  && search.length > 0 && <p>Ingrese más de 2 caracteres para buscar</p>}
            {result > 0 && <h5>Resultado de la busqueda: {result}</h5>}
            {result == 0 && <h5>Ooops, 0 resultados</h5>}
        </div>
    )
};

export default Search;