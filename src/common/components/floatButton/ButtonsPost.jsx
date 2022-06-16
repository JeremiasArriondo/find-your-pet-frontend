import { Dropdown } from "@nextui-org/react";
import styles from './styles.module.css';

const ButtonsPost = () => {

    return (
        <div className={styles['position']}>
            <Dropdown>
                <Dropdown.Button shadow color={'secondary'}>
                Light
                </Dropdown.Button>
                <Dropdown.Menu
                    color={'secondary'}
                    // variant="light"
                    aria-label="Actions"
                >
                <Dropdown.Item key="new">New file</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
};

export default ButtonsPost