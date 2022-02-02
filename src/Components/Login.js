import React from 'react';
import './Login.css';
import {useState} from 'react';
import axios from 'axios';


  

var data = [{email: '',
            password: ''
}];



class LoginForm extends React.Component{

    constructor(){
    super();
    this.testing = this.testing.bind(this);
  }

    getData(val){
        console.log(val.target.value)
    }

    testing(){
    console.log("test");
    this.props.login();
}

  render(){
    return(
      <div id="loginform">
        <FormHeader title="Login" />
        <div className="row">
            <label>Username</label>
            <input type="text" placeholder="Enter your username" onChange={(val) => {data.email = val.target.value; console.log(data)}}/>
        </div>  
        <div className="row">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" onChange={(val) => {data.password = val.target.value; console.log(data)}}/>
        </div>  
        {(this.props.userNotFound == "not found") ? <p className="user-not-found">Email or password wrong, please try again</p> : <p></p>}
        <div id="button" className="row">
            <button onClick={()=>{this.props.login(data.email, data.password)}}>log in</button>
        </div>
      </div>
    )
  }
}



const FormHeader = props => (
    <h2 id="headerTitle">{props.title}</h2>
);


export default LoginForm