import React, { Component, useState } from 'react'
import './Search.less';
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from '@material-ui/core';
import { withRouter, RouteComponentProps, useHistory  } from 'react-router-dom';
import { useStateValue } from '../../store';
import {actionTypes} from '../../store/reducer';

export interface SearchProps {
    children?: React.ReactNode;
    hidden: boolean;
    value?: any;
}
 
const Search: React.FC<SearchProps> = ({...props}) => {
    const history = useHistory();
    const [term_, setterm] = useState('');
    const [{term}, dispatch] = useStateValue();
    const search = (event: any, dispatch: any) => {
        console.log('hector');
        event.preventDefault();
        
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: term_
        });
        setterm('');
        history.push('/search');
    }
    
    const inputHandler= (event: any) => {
        setterm(event.target.value);
    }

    return (
        <form className='search'>
            <div className="search__input">
                <SearchIcon className="search__inputIcon" fontSize="large" />
                <input type="text" value={term_} onChange={inputHandler}/>
                <MicIcon fontSize="large"/>
            </div>

            {!props.hidden ? (
                <div className="search__buttons">
                    <Button type="submit" onClick={(e) => search(e, dispatch)} variant="outlined">Google Search</Button>
                    <Button variant="outlined">Feeling Lucky</Button>
                </div>
            ): (
            <div className="search__buttons">
                <Button className="search__buttonsHidden" type="submit" onClick={(e:any)=> search(e, dispatch)} variant="outlined">Google Search</Button>
                <Button className="search__buttonsHidden" variant="outlined">Feeling Lucky</Button>
            </div>
        )}
        </form>
    )
}
 
export default Search;

