const baseUrl = process.env.REACT_APP_API_URL;

/**
 * Funciones que se encargan de hacer las peticiones HTTP correspondientes segun el metodo recibido
 * en la constante method, que si no recibe ninguno por defecto es un GET a una API en cuestion
 * segun el endpoint recibido por parametro donde se envian los datos a traves del body mediante
 * la constante data
 */

const fetchWithoutToken = async (endpoint, data, method = 'GET') => {
	const url = `${baseUrl}/${endpoint}`;

	if (method === 'GET') {
		return await fetch(url);
	} else {
		return await fetch(url, {
			method,
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.catch((error) => {
				throw new Error(`Ocurrió un error (${error.message})`);
			});
	}
};

/**
 * En esta funcion se recupera el token mediante el uso del hook personalizado useLocalStorage
 * para enviarlo a los headers en la peticion
 */

const fetchWithToken = async (endpoint, data, method = 'GET') => {
	const url = `${baseUrl}/${endpoint}`;
	const token = JSON.parse(localStorage.getItem('token'));
	if (data === null && method === 'POST') {
		data = {};
	}
	// chequea si es un multipart asi despues se cambian algunas opciones en el fetch
	const isFormData = data instanceof FormData;

	if (method === 'GET') {
		return await fetch(url, {
			method,
			headers: {
				'x-token': token,
			},
		})
			.then((response) => response.json())
			.catch((error) => {
				throw new Error(
					`Ocurrió un error intentando traer los datos (${error.message})`
				);
			});
	} else {
		return await fetch(url, {
			method,
			headers: {
				...(!isFormData && { 'Content-type': 'application/json' }),
				'x-token': token,
			},
			body: isFormData ? data : JSON.stringify(data),
		})
			.then((response) => response.json())
			.catch((error) => {
				throw new Error(
					`Ocurrió un error intentando traer los datos (${error.message})`
				);
			});
	}
};

export { fetchWithoutToken, fetchWithToken };