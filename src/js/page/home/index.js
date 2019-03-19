import React,{Component} from 'react';
import Content from 'components/Content';

export default class Home extends Component{
    render(){
        return (
            <React.Fragment>
                <div className="header">home</div>
                <div className="content">
                    <Content />
                </div>
            </React.Fragment>
        );
    }
}
