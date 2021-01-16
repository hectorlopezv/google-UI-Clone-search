import React, { Component } from 'react'
import './Search.less';
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from '@material-ui/core';
import { withRouter, RouteComponentProps  } from 'react-router-dom';


interface Props {
   
    children?: React.ReactNode;
    hidden: boolean;
}
interface State {
    
}

class Search extends Component<RouteComponentProps & Props & State> {

    state = {
        value: ''
    }

    search = (event: any) => {
        console.log('hector');
        event.preventDefault();
        this.props.history.push('/search');
    }
    
    inputHandler= (event: any) => {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <form className='search'>
                <div className="search__input">
                    <SearchIcon className="search__inputIcon" fontSize="large" />
                    <input type="text" value={this.state.value} onChange={this.inputHandler}/>
                    <MicIcon fontSize="large"/>
                </div>

                {!this.props.hidden ? (
                    <div className="search__buttons">
                        <Button type="submit" onClick={this.search} variant="outlined">Google Search</Button>
                        <Button variant="outlined">Feeling Lucky</Button>
                    </div>
                ): (
                <div className="search__buttons">
                    <Button className="search__buttonsHidden" type="submit" onClick={this.search} variant="outlined">Google Search</Button>
                    <Button className="search__buttonsHidden" variant="outlined">Feeling Lucky</Button>
                </div>
            )}



            </form>
        )
    }
}

export default withRouter(Search)

