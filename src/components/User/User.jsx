import React, { Component } from 'react'
import axios from 'axios'

export default class User extends Component {
    constructor(){
        super()
        this.state ={
            nama : ''
        }
    }
    componentDidMount(){
axios.get('https://deploy-springboot-heroku.herokuapp.com/api/user').then(res =>{
    this.setState({
        user: res.data.user
    })
    console.log(res)
})
    }
    render() {
        return (
            <div>
                <h1>Nama : {this.state.nama}</h1>
            </div>
        )
    }
}
