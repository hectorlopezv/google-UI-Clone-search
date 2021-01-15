import React, { Component } from 'react'
import './Search.less';
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";

interface Props {
    
}
interface State {
    
}

export default class Search extends Component<Props, State> {
    state = {}

    render() {
        return (
            <div className='search'>
                <div className="search__input">
                    <SearchIcon className="search__inputIcon" />
                    <input type="text"/>
                    <MicIcon />
                </div>
            </div>
        )
    }
}
