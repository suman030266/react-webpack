import React,{Component} from 'react';
import fetch from 'io/fetch';

export default class Content extends Component{
    constructor(){
        super();
        this.state = {
            data: []
        };
    }
    componentWillMount(){
        console.log('componentWillMount');
        fetch.get('/talent/new_list',{
            params: {
                a: 1,
                b: 2
			},
			loading: true
        }).then((res)=>{
            let {data} = res;
            this.setState({data});
		}).catch((err)=>{
			console.log(err);
		});
    }
    render(){
        let {data} = this.state;
        return (
            <div className="main">
                <ul>
                    {
                        data.map((item, index) =>{
                            return <li key={index}>{index}:{item.name}<br /></li>
                        })
                    }
                </ul>
            </div>
        );
    }
}
