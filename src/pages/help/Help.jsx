import Maps from './components/Maps';
import styles from './Help.module.css';
import { veterinaryData } from './data.js';

const Help = () => {
    return (
        <div className={styles.container}>
            <div>
                <h1>Información de ayuda:</h1>
                {veterinaryData.map(({ name, phoneNumber }) => {
                    return (
                        <div key={phoneNumber}>
                            <h2>{name}</h2>
                            <p>{phoneNumber}</p>
                            <button
                                value={phoneNumber}
                                defaultValue={phoneNumber}
                                onClick={ ({target}) => {
                                    // console.log(target.value)
                                    navigator.clipboard.writeText(
                                        target.value
                                    )
                                }
                                    
                                }
                            >
                                Copy
                            </button>
                        </div>
                    );
                })}
            </div>
            <Maps />
        </div>
    );
};

export default Help;
