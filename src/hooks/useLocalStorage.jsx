import { useState } from 'react';

/**
 * Este hook se encarga de manejar el localStorage, sin importar que datos se le pasen.
 * Sus parámetros indican el nombre que se le colocará al item (itemName) en el localStorage
 * con su correspondiente valor inicial (initialValue).
 * Si el ítem ya existe en el almacenamiento, el hook se encargará de buscarlo y retornarlo
 */
const useLocalStorage = (itemName, initialValue) => {
	// En caso de que ya exista el ${itemName} en el storage, lo guardamos en esta variable
	const localStorageItem = localStorage.getItem(itemName);

	// Esta variable contendrá datos dependiendo de si es la primera vez que se ingresa o no
	let parsedItem;

	if (!localStorageItem) {
		// Si entra a esta parte del condicional, significa que es la primera vez
		// que el usuario ingresa a la app, por lo tanto el dato en localStorage no existe
		// Entonces se crea
		localStorage.setItem(itemName, JSON.stringify(initialValue));

		// Una vez creado el dato en localStorage, seteamos los valores normales en la variable declarada más arriba
		parsedItem = initialValue;
	} else {
		// Por parte del else, significa que NO es la primera vez que el usuario ingresa
		// por lo tanto, convertimos a código a la variable del localStorage
		parsedItem = JSON.parse(localStorageItem);
	}

	// Creamos un estado para manejar el ${itemName} con su respectivo modificador
	const [item, setItem] = useState(parsedItem);

	// Esta función se encarga de modificar el estado tanto en el localStorage como en la app
	const saveItem = (newItem) => {
		const stringifiedItem = JSON.stringify(newItem);
		localStorage.setItem(itemName, stringifiedItem);
		setItem(newItem);
	};

	return [item, saveItem];
};

export { useLocalStorage };