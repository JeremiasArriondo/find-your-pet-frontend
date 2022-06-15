import { useState } from "react"

const useForm = ( initialState = {}) => {

    const [values, setValues] = useState(initialState)

    const handleInputCHange = ( {target } ) => {
        setValues({
            ...values,
            [target.name]: target.value
        });
    }

    const resetFields = () => setValues(initialState);

    return [values, handleInputCHange, resetFields];
};

export default useForm;