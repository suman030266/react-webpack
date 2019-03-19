import React,{Component} from 'react';
import Content from 'components/Content';

export default class Other extends Component{
    render(){
        return (
            <React.Fragment>
                <div className="header">other</div>
                <div className="content">
                    <Content />
                </div>
            </React.Fragment>
        );
    }
}
