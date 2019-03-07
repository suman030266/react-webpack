import React,{Component} from 'react';
import {HashRouter as Router, Link} from 'react-router-dom';

export default class Footer extends Component{
    render(){
        return (
            <div class="footer">
                <Router>
                    <React.Fragment>
                        <Link to='/'>home</Link>
                        <Link to='/other'>other</Link>
                    </React.Fragment>
                </Router>
            </div>
        );
    }
}
