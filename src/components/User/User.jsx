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
        nama: res.data.user
    })
})
    }
    render() {
        return (
            <div>
                <h1>{this.state.nama}</h1>
            </div>
        )
    }
}
