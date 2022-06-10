import { useState } from "react"

const useForm = ( initialState = {}) => {

    const [values, setValues] = useState(initialState)

    const handleInputCHange = ( {target } ) => {
        setValues({
            ...values,
            [target.name]: target.value
        });
    }

    return [values, handleInputCHange];
};

export default useForm;