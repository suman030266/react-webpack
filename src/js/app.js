import React,{Component} from 'react';
import '../sass/index.scss';
import {BrowserRouter, HashRouter, HashRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './page/home';
import Other from './page/other';
export default class App extends Component{
    render(){
        return (
            <React.Fragment>
                <Router>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/other' component={Other} />
                        {/* <Route path="/topics" component={Topics} /> */}
                    </Switch>
                </Router>
                {this.props.children}
            </React.Fragment>
        );
    }
}
  