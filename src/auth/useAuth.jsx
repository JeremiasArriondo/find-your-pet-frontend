import { useContext } from 'react';
import { AuthContext } from './authContext';

/** Custom Hook que devuelve el contexto de AuthContext */
export const useAuth = () => useContext(AuthContext);