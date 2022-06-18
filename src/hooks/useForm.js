// ESTE CUSTOMHOOK ES GENERICO MANEJA TODO EL STATE DE  UN FORMULARIO

import { useState } from 'react';

export const useForm = ( initialForm = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
// UNA A UNA VA ASIGNANDO LAS PROPIEDADES AL FORMULARIO AL DISPARARSE ESTA FUNCION
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}