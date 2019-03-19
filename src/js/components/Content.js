import React,{Component} from 'react';
import fetch from 'io/fetch';

export default class Content extends Component{
    constructor(){
        super();
        this.state = {
            data: {}
        };
    }
    componentWillMount(){
        console.log('will');
        fetch.get('/talent/recommend_list',{
            params: {
                a: 1,
                b: 2
			},
			loading: true
        }).then((res)=>{
			console.log(res);
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
                        Object.keys(data).map((item, index) =>{
                            return <li key={index}>{item}:{data[item]}<br /></li>
                        })
                    }
                </ul>
            </div>
        );
    }
}
