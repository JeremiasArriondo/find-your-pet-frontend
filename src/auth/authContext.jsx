import { createContext, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { fetchWithoutToken, fetchWithToken } from '../helpers/fetch';

/** Contiene informacion del usuario como su rol y saber si esta logeado. */
export const AuthContext = createContext();

/**Componente que provee el contexto de AuthContext. */
const AuthProvider = ({ children }) => {
	const [userContext, setUserContext] = useLocalStorage('userContext', null);
	const [tokenStorage, setTokenStorage] = useLocalStorage('token', null);
	const [tokenIniDate, setTokenIniDate] = useLocalStorage(
		'tokenIniDate',
		null
	);
	const [error, setError] = useState(null);
	const [fullName, setFullName] = useState('');
	/**
	 * Esta función devuelve un valor booleano sea cual sea el caso
	 * Tanto si existe o no el usuario.
	 */
	const isLogged = () => (userContext ? true : false);

	/**
	 * Al ser invocada recibe un ROL de la constante de roles
	 * Si existe el rol, entonces lo compara con el rol del usuario
	 */
	const hasRole = (role) => role && userContext?.rol === role;

	/**
	 * función que evalúa si el usuario logueado ya cambio su contraseña
	 * por primera vez
	 */
	const firstPasswordChange = () => {
		setUserContext({ ...userContext, firstPasswordUpdated: true });
	};

	/**
	 * Al ser invocada recibe un emaily contraseña
	 * Si el usuario fue validado es habiltado para utilizar la apliación
	 * Sino se muestra el mensaje de error
	 */
	const loginUser = async (email, password) => {
		
		try {
			let dataFromBack = await fetchWithoutToken(
				'auth/login',
				{ email, password },
				'POST'
			);

			const { data, status } = dataFromBack;

			if (status) {
				let { token, user } = data;
				setTokenStorage(token);
				setTokenIniDate(new Date());
				setUserContext(user);
				setError(null);
			} else {
				setError('Datos invalidos');
			}
		} catch (catchedError) {
			setError(`${catchedError}`);
		}
	};

	const logoutUser = () => {
		setUserContext(null);
		setTokenStorage(null);
		setTokenIniDate(null);
		setError(null);
	};

	/**
	 * Función que refresca el token o cierra la sesión dependiendo de la respuesta
	 * que le llega al realizar la petición al backend.
	 */
	const refreshTokenOrClose = async () => {
		try {
			const { data, status } = await fetchWithToken(
				'login/refreshToken',
				{},
				'POST'
			);

			if (!status) return logoutUser();

			let { token } = data;

			setTokenStorage(token);
			setTokenIniDate(new Date());
		} catch (error) {
			setError(error);
		}
	};

	const registerUser = (email, password) => {
		if (!email || !password) {
			return;
		}

		setUserContext({ ...userContext, email, password });
	};

	const contextValues = {
		userContext,
		error,
		registerUser,
		isLogged,
		hasRole,
		loginUser,
		logoutUser,
		tokenStorage,
		tokenIniDate,
		refreshTokenOrClose,
		firstPasswordChange,
		fullName,
		setFullName,
	};

	return (
		<AuthContext.Provider value={contextValues}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;