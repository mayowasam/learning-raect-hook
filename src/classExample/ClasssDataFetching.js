import React, { Component } from 'react'
import axios from 'axios'

export class ClasssDataFetching extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            loading: false
        }
    }
    componentDidMount() {

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res.data)
                this.setState({
                    data: res.data
                })

            })
            .catch((err)=>console.log(err))


    }
    render() {
        return (
            <div>

                <ul>
                    {this.state.data.map((newdata) => {
                        return (
                            <li key={newdata.id}>{newdata.title}</li>
                        )
                    })}
                </ul>



            </div>
        )
    }
}

export default ClasssDataFetching