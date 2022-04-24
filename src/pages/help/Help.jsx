import Maps from './components/Maps';
import styles from './Help.module.css';
import { veterinaryData } from './data.js';
import { Tooltip } from '@nextui-org/react';

const Help = () => {
    return (
        <div className={styles.container}>
            <div>
                <h1>Información de ayuda:</h1>
                {veterinaryData.map(({ name, phoneNumber }) => {
                    return (
                        <li key={phoneNumber}
                            className={styles.list}
                        >
                            <h2>{name}</h2>
                            <div className={styles['container-copy']}>
                                <p>Tel: </p>
                                <Tooltip
                                    placement='bottom'
                                    content='Click para copiar'
                                    color='invert'
                                >
                                    <button
                                        value={phoneNumber}
                                        defaultValue={phoneNumber}
                                        className={styles.button}
                                        onClick={ ({target}) => {
                                            navigator.clipboard.writeText(target.value);
                                            console.log(target.value)
                                        }}
                                    >
                                        {phoneNumber}
                                    </button>   
                                </Tooltip>
                                                         
                            </div>
                        </li>
                    );
                })}
            </div>
            <Maps />
        </div>
    );
};

export default Help;
