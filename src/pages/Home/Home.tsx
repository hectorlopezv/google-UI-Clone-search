import React, { Component } from 'react'
import './Home.less';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import Search from '../../components/Search/Search';
import { StateContext } from '../../store';

interface Props {
}
interface State {
    
}

export default class Home extends Component<Props, State> {
    state = {}

    render() {
        return (
            <div className="home">
                <div className="home__header">
                
                        <div className=" home__headerLeft">
                            <Link to='/about'>About</Link>
                            <Link to='/store'>Store</Link>
                        </div>

                        <div className="home__headerRight">
                            <Link to='/gmail'>Gmail</Link>
                            <Link to='/images'>Images</Link>
                            <AppsIcon />
                            <Avatar />
                        </div>
                </div>
                
                <div className="home__body">
                    <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="google image"/>

                    <div className="home__inputContainer">
                         <Search hidden={false} />
                    </div>
                </div>
            </div>
        )
    }
}
