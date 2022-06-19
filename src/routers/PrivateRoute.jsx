import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth";

const PrivateRoute = ({children}) => {
    const { isLogged } = useAuth();
    //Si el usuario no está logueado lo va a redirigir al login
    if (!isLogged()) return <Navigate to='/login' />;

    return children;
}

export default PrivateRoute;