import React, { Component } from 'react'
import axios from 'axios' 


export class ClassFetchSpecific extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data:[],
             id:1
        }
    }

    fetchApi=()=>{
        console.log(this.state.id)
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.state.id}`)
        .then(res=>{
            this.setState({
                data:res.data
            })
        })
        .catch((err)=>err.message)
    }


    
    render() {
        return (
            <div>

                {/* <ul>
                    {this.state.data.map((newdata) => {
                        return (
                            <li key={newdata.id}>{newdata.title}</li>
                        )

                    })}
                </ul> */}
                <h1>{this.state.data.title}</h1>
                <input type="text"
                value={this.state.id} 
                onChange={(e)=>this.setState({id:e.target.value})} />
                <button onClick={this.fetchApi}>button</button>
            </div>
        )
    }
}

export default ClassFetchSpecific