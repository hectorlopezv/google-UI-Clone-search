import React, { Component } from 'react'
import './GridDemo.less';
import image1 from './tsimage1.png';
import image2 from './tsimage2.png';

interface Props {
    
}
interface State {
    
}

export default class GridDemo extends Component<Props, State> {
    //state = {}

    render() {
        return (
        <>
            <div className="container grid overflow-hidden">
                <div className="row">
                    <div className="col-md">
                        <div className="p-3 border bg-light">Custom column padding</div>
                    </div>

                    <div className="col-md offset-md-1">
                        <div className="p-3 border bg-light">Custom column padding</div>
                    </div>
                    
                    <div className="col-md">
                        <div className="p-3 border bg-light">Custom column padding</div>
                    </div>

                </div>
                
                <div className="row">
                    <div className="col-md-4">.col-md-4</div>
                    <div className="col-md-4 ms-auto">.col-md-4 .ms-auto</div>
                </div>

            </div>
            
            <h2>Gutter</h2>
            
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        Main Content
                    </div>
                    <div className="col-md-4">
                        SideBar
                    </div>
                </div>
            </div>
            </>
        )
    }
}
