import React,{Component} from 'react';
import 'css/index.scss';
import {BrowserRouter, HashRouter, HashRouter as Router, Route, Switch} from 'react-router-dom';
import Home from 'page/home';
import Other from 'page/other';
import Content from 'components/Content';
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
                <Content />
                {this.props.children}
            </React.Fragment>
        );
    }
}
  