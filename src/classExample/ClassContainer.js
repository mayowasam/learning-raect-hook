import React, { Component } from 'react'

export class ClassContainer extends Component {
    constructor(props){
        super(props);
        this.state={
            count:0, 
            name:""
        }
    }
    
componentDidMount(){
    document.title=`clicked ${this.state.count}`
    console.log('componentdidmount')
}

componentDidUpdate(prevProps,prevState){
   
   if(prevState.count !== this.state.count){
    document.title=`clicked update ${this.state.count }` && console.log('componentdidupdate')
   } 
}


    render() {
        return (
            <div>
                <input 
                type="text" 
                value={this.state.name} 
                onChange={(e)=>{this.setState({
                    name:e.target.value
                })}}
                />

                <br/>
                <br/>
                <br/>


                <button onClick={()=>this.setState({count:this.state.count + 1})}> increase</button>
        <h1>clicked :{this.state.count}</h1>
            </div>
        )
    }
}

export default ClassContainer
