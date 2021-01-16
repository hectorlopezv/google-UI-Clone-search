export const actionTypes = {
    SET_SEARCH_TERM: 'SET_SEARCH_TERM'
}

export const initialState = {
    term: null,
}

const reducer = (state: any, action: any) => {
    console.log('entro al reducer')
    console.log('el state', state)
    console.log('el action', action);
    switch(action.type){
        case actionTypes.SET_SEARCH_TERM:
            return {
                ...state,
                term: action.term
            }
        default: 
            return state;
    }
};

export default reducer;
