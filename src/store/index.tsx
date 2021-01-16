import React, {createContext, useContext, useReducer} from 'react';

export const StateContext =  createContext({});
export interface StateProviderProps {
    initialState: any; 
    reducer: any;
    children: any;
}
 
export const StateProvider: React.FC<StateProviderProps> = ({initialState, reducer, children, ...props}) => {
    return (
        <StateContext.Provider value={useReducer(initialState, reducer)}>
            {children}
        </StateContext.Provider>
    );
}
 



export const useStateValue = () =>  useContext(StateContext);

