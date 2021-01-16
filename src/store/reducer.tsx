export const actionTypes = {
    SET_SEARCH_TERM: 'SET_SEARCH_TERM'
}

export const initialState = {
    term: null,
}


const reducer = (state: any, action: any) => {

    if(action.type === actionTypes.SET_SEARCH_TERM){
        return {...state,
                term: action.term
        };
    }

    return state;
}
export default reducer;
