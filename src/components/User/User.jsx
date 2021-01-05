import React, { Component } from 'react'
import axios from 'axios'

export default class User extends Component {
    constructor(){
        super()
        this.state ={
            user : {}
        }
    }
    componentDidMount(){
        const getUrl ='https://deploy-springboot-heroku.herokuapp.com/api/read?id=1'
        axios.get(getUrl).then(res =>{
         let data = res.data
        this.setState({
            user: data.Messeage
         })
        console.log(data);
        console.log(data.Messeage);
})
    }
    render() {
        return (
            <div>
                <h1>Get Data From Heroku Spring Boot </h1>
                <p>name : {this.state.user.name}</p>
                <p>email : {this.state.user.email}</p>
                <p>age : {this.state.user.age}</p>
            </div>
        )
    }
}
