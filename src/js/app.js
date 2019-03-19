import React,{Component} from 'react';
import 'css/index.scss';
import {BrowserRouter, HashRouter, HashRouter as Router, Route, Switch} from 'react-router-dom';
import LazyLoad from 'components/LazyLoad';

let routeArr = [{
    exact: true,
    path: '/',
    component: (props) => <LazyLoad {...props} load={()=>import('page/home')}></LazyLoad>
},{
    exact: false,
    path: '/other',
    component: (props) => <LazyLoad {...props} load={()=>import('page/other')}></LazyLoad>
}];
export default class App extends Component{
    render(){
        return (
            <React.Fragment>
                <Router>
                    <Switch>
                        {
                            routeArr.map((item, index) =>( <Route key={index} {...item} />))
                        }
                    </Switch>
                </Router>
                {this.props.children}
            </React.Fragment>
        );
    }
}  