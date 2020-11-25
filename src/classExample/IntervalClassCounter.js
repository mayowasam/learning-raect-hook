import React, { Component } from 'react'

export class IntervalClassCounter extends Component {
    constructor(props){
        super(props)
        this.state={
            counter:0
        }
    }

    componentDidMount() {
        console.log("counter mounted")
        this.interval=setInterval(() => {
            this.setState((prevCounter) => {
                console.log(prevCounter)
                return{
                    counter: prevCounter.counter + 1
                }
            })
            
        }, 1000);
        
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }
    

    render() {
       
        return (
            <div>
                <h1>COUNTER = {this.state.counter}</h1>
            </div>
        )
    }
}

export default IntervalClassCounter