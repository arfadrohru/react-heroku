import React, { Component } from 'react'
import axios from 'axios'

export default class User extends Component {
    constructor(){
        super()
        this.state ={
            user : {},
            file:'',
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

    handleFile(fileupload){
    let file = fileupload.target.value
    this.setState({
        file: file
    })
    }

    postFile(){
        let file = this.state.file
        const postUrl ='https://deploy-springboot-heroku.herokuapp.com/upload'
        const fd = new FormData()
        fd.append("file", file)
        axios.post(postUrl,fd).then(
            console.log("Done");
        )
    }

    render() {
        return (
            <div>
                <h1>Get Data From Heroku Spring Boot </h1>
                <p>name : {this.state.user.name}</p>
                <p>email : {this.state.user.email}</p>
                <p>age : {this.state.user.age}</p>
                <label>Uplaod File  </label>
                <input type="file" onChange={(fileupload)=>this.handleFile(fileupload)}/>
                <button onClick={this.postFile()}>Upload</button>
            </div>
        )
    }
}
