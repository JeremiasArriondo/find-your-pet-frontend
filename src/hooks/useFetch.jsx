import { useState, useEffect } from 'react';
// import { fetchWithToken } from '../helpers/fetch';
// import { useAuth } from '../auth/useAuth';

/**
 * Hook personalizado useFetch el cual recibe la url a la que se le va a realizar la petición HTTP correspondiente,
 * el body con los datos a realizar en la peticion y el método de la misma.
 */

const useFetch = (url, reqBody, method) => {
	// const { refreshTokenOrClose } = useAuth();

	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(null);
	const [error, setError] = useState(null);
	const [trigger, setTrigger] = useState(false);

	/* La funcion refresh se puede consumir desde donde usemos el useFetch para 'rehacer' el fetch */
	const refresh = () => {
		setTrigger(!trigger);
	};

	useEffect(() => {
		// refreshTokenOrClose();
		const fetchData = async () => {
			setIsLoading(true);
			try {
				if (!url.includes('undefined')) {
					const res = await fetchWithToken(url, reqBody, method);
					setData(res);
				}
			} catch (error) {
				if (error?.response?.data) setError(error?.response?.data);
				else if (error) setError(error);
			}
			setIsLoading(false);
		};

		fetchData();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [url, method, trigger]);

	return { data, isLoading, error, refresh };
};

export default useFetch;