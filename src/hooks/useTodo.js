// Este es un custom hook que maneja el Reducer parmanejar y compartir el estado en el componente TodoApp 

import { useEffect, useReducer } from 'react';
import { todoReducer } from '../Reducers/todoReducer'; 


// Este efecto se dispara para verificar si hay algo guardado en localStorage
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {
    
    // PARA USAR TODO REDUCER ES DECESARIO PASARLE A ESTE HOOK EL REDUCER QUE MENEJARA EL STATE, EL ESTADO INICIAL Y OPCIONALMENTE UNA 
    // FUNCION QUE SE ENCARGA DE SETEAR EL ESTADO INICIAL

    const [ todos, dispatch ] = useReducer( todoReducer, [], init );

    // ESTE EFECTO SE DISPARA CADA VEZ QUE CAMBIA EL STATE DEL USEREDUCER PARA GUARDAR EN LOCALSTORAGE LOS CAMBIOS
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify( todos ) );
    }, [todos])
    


    // lOGICA DE FUNCIONES QUE SERAN PASADAS POR REFERENCIA ENTRE COMPONENTES, UTILIZANDO LOS METODOS QUE TIENE EL REDUCER

    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch( action );
    }

    const handleDeleteTodo = ( id ) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
    }

    const handleToggleTodo = ( id ) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        });
    }

    return {
        todos,

        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo=> !todo.done).length,

        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    }

}