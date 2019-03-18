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
        // fetch('/v1').then(res=>res.json()).then(data =>{
        //     console.log(data);
        //     this.setState({
        //         data: data.data
        //     });
        // });
        fetch.get('/v1',{
            params: {
                a: 1,
                b: 2
			},
			loading: true
        }).then((res)=>{
			console.log(res);
		}).catch(()=>{
			toast('网络请求失败，请稍后重试');
		})
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
