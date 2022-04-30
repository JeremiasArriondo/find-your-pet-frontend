import { Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';

const ContentTooltip = () => {
    return (
        <div>
            <Link to={'/profile'}>
                <Button>Ir a Perfil</Button>
            </Link>
            <Link to={'/login'}>
                <Button>Cerrar sesión</Button>
            </Link>
        </div>
    );
};

export default ContentTooltip;
