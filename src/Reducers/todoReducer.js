export const todoReducer = ( initialState = [], action ) => {

// FUNCIONES QUE PUEDE DISPARAR ESTE REDUCER

// RECORDAR EL REDUCER SIEMPRE DEBE RETORNAR UN STATE
// UN REDUCER DEBE  SER UNA FUNCION PURA SIN RECURRIR A FUNCIONES EXTERNAS SOLO SU LOGICA INTERNA
// EL REDUCER DEBE SER SINCRONO
    switch ( action.type ) {
        case '[TODO] Add Todo':
            return [ ...initialState, action.payload ];

        case '[TODO] Remove Todo':
            return initialState.filter( todo => todo.id !== action.payload );

        case '[TODO] Toggle Todo':
            return initialState.map( todo => {

                if ( todo.id === action.payload ) {// id
                    return {
                        ...todo,
                        done: !todo.done
                    }
                } 

                return todo;
            });
    
        default:
            return initialState;
    }


}