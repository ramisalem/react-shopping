import React from 'react';
import { login } from '../../repository';
import './login.css';
import axios from 'axios';
export default class Login extends React.Component{
  constructor() {
    super();
    this.state = { email: '', password: '' };
    this.handleClick = this.handleClick.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);

  }

  
  handleEmail(event) {
    event.preventDefault();
      this.setState({
        email: event.target.value 
      });
      
   }
   handlePassword(event) {
    event.preventDefault();
    this.setState({
      password: event.target.value 
    });  
    }

 handleClick(event){
  event.preventDefault();
  var apiBaseUrl = "http://localhost:5000/signin";
  console.log(this.state.email);
  console.log(this.state.password);
  axios({
      method: 'post',
      url:  apiBaseUrl ,
      data: {
          emial:  this.state.email ,
          password:  this.state.password
        }, 
      config: { headers: {'Content-Type': 'application/json' }}
      })
      .then(res => {
          console.log(res);
      })
      .catch(function (response) {
          //handle error
          console.log(response);
      });

  axios.post(  apiBaseUrl , {
      email:      this.state.email ,
      password:  this.state.password
    })
    .then(function (response) {
      console.log(response.status);
      if(response.status === 201) {
        alert("s");
        
      }

    })
    .catch(function (error) {
      console.log(error);
    });
   


}

  render() {
     return (
       <div> 
        <div className="lbox lcontainer">
        
        <h2>sign in</h2>
        
        <form >
          <div className="inputBox">
                  <input value={this.state.value} onChange={this.handleEmail}  type="" name="" required="" />
                  <label>Email</label>
          </div>
          <div className="inputBox">
                  <input value={this.state.value} onChange={this.handlePassword}  type="" name="" required="" />
                  <label>Password</label>
           </div>       
        <input  onClick={this.handleClick} type="submit" value="Login" />
      </form>
        </div>  
        <div className="login-footer">
            <div className="lcontainer">
                <div className="lsoial">
                      <i className="fab fa-facebook-square"></i>
                      <i className="fab fa-twitter-square"></i>
                      <i className="fab fa-instagram"></i>
                      <i className="fab fa-linkedin"></i>
                      <i className="fab fa-youtube-square"></i>
                      
                </div>
                <p> copyright © 2019. all rights reserved</p> 
            </div>
        </div>
        </div>
    );
  }
}