import React, { Component } from 'react'
import './Home.less';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';

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
                            {/*Link*/}
                            <Link to='/about'>about</Link>
                            <Link to='/store'>Store</Link>
                            {/*Link*/}
                        </div>

                        <div className="home__headerRight">
                            {/*Link*/}
                            <Link to='/gmail'>Gmail</Link>
                            <Link to='/images'>Images</Link>
                            {/*Link*/}
                            {/*Icon */}
                            <AppsIcon />
                            <Avatar />
                        </div>

                </div>
                
                <div className="home__body">
                    Body
                </div>
            </div>
        )
    }
}
