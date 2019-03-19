import React,{Component} from 'react';

export default class LazyLoad extends Component{
    constructor(){
        super();
        this.state = {com:null}
    }
    componentDidMount(){
        this.props.load().then(data=>{
            this.setState({
                com:data.default
            })
        })
    }
    render(){
        let Com = this.state.com;
        return Com ? <Com {...this.props}></Com>: <div>正在加载中...</div>
    }
}