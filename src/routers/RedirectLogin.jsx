import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth"

const RedirectLogin = ({children}) => {
    const {isLogged} = useAuth();
    //Si eciste el usuario y esta logeado lo redirije a la home
    if (isLogged()){
        return <Navigate replace to='/pets' />;
    }
    return children;
}

export default RedirectLogin