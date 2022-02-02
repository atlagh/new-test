import React from 'react';
import logo from './logo.svg';
import './App.css';
import Popup from './Components/Popup';
import CategorizationForm from './Components/CategorizationForm';
import axios from 'axios';
import LoginForm from './Components/Login.js'
import Loading from './Components/Loading.js'


const mode = 'login';


class App extends React.Component {

  constructor(){
    super();
    this.state = {
      form: 'https://tripetto.app/run/BSED3DPQPF',
      user: 'KJHKHKJHKJHLKJKJLJLkjlkhkjhkjhlkjlkjlj',
      rootCauseList: '',
      requestInfoList: '',
      subject: '',
      taskName: '',
      message: '',
      firstName: ''
    };
    this.login = this.login.bind(this);
  }


async sendData(data){

}


async login(email, password){
  console.log(email)
  const requestOptions = {
        email:  email, password: password
      };

  var result = await  axios.post('http://localhost:3001/signIn', {requestOptions})
  this.setState({user: result.data})
  console.log(this.state.user)
  if(this.state.user.length>15){
  this.callAPI(this.state.user);
  }
  this.intervalCallApi()
}
  intervalCallApi(){
    console.log(this.state.form)
        setInterval(() => {
          if(this.state.user != ''){
            this.callAPI(this.state.user);
          }
          
          console.log("interval")
        }, 5000);
  }

intervalCall(){
  setInterval(() => {
          
          this.callAPI()
        }, 5000);

}



async callAPI(user) {
  // var result = await  axios.post('https://ene2plazrlk3g8w.m.pipedream.net', {user: user})
  // if(result.data.form){
  // this.setState({form: result.data.form} )
  // this.setState({rootCauseList: result.data.rootCauseList} )
  // this.setState({requestInfoList: result.data.requestInfoList} )
  // this.setState({subject: result.data.subject} )
  // this.setState({taskName: result.data.taskName} )
  // this.setState({message: result.data.message} )
  // }else {
  //   this.setState({form: ''} )
  // }


  var result = await  axios.post('https://ene2plazrlk3g8w.m.pipedream.net', {user: user})
  // console.log(result.data)
  this.setState({form: result.data} )
  // this.intervalCall();


  
}

 

componentDidMount(){
  this.callAPI();
  this.intervalCall();
  // this.handleCallback("test");
  // console.log(this.state.input);
  // console.log(this.state.input2);

}



render(){
  // this.callAPI();
  // this.intervalCall();
    return (
      <div className="App">
        {(this.state.user.length>15) ?
          (this.state.form) == '' ? 
          <Loading/> :
        <Popup id={this.state.form} 
               list={this.state.rootCauseList} 
               requestInfoList={this.state.requestInfoList}
               subject={this.state.subject}
               taskName={this.state.taskName}
               message={this.state.message}
               firstName={this.state.firstName}
        /> : <LoginForm test={this.state.form} login={this.login} userNotFound={this.state.user}/>
      }
      </div>
  );

  }

}



  

export default App;
