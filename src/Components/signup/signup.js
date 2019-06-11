import React from 'react';
import { login } from '../../repository';
import '../Login/login.css';
  import axios from 'axios';
export default class SignUp extends React.Component{
  constructor() {
    super();
    this.state = { 
        first_name:'',
        last_name:'',
        email:'',
        password:'' ,
        address: '' ,
        number: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

//   handleInputChange = (event) => 
//             this.setState({[event.target.name]: event.target.value})
//   submitLogin = (event) => {
//     event.preventDefault();
//     login(this.state)
//       .then(token => window.location = '/').catch(err => console.log(err));

    
//   }

  handleClick(event){
    event.preventDefault();
    
    var apiBaseUrl = "http://localhost:5000/signup";
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
            console.log(res.data);
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

          alert("User crated ");
        }

      })
      .catch(function (error) {
        console.log(error);
      });
     


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
  
  render() {
     return (
       <div> 
        <div className="lbox lcontainer">
        <h2>sign up</h2>
        <form>
          <div className="inputBox">
                  <input value={this.state.value} onChange ={this.handleEmail.bind(this)}  type="" name="" required="" />
                  <label>Email</label>
          </div>
          <div className="inputBox">
                  <input value={this.state.value} onChange = {this.handlePassword.bind(this)}  type="password" name="" required="" />
                  <label>Password</label>
           </div>
           <div className="inputBox">
                  <input value={this.state.value} onChange = {(event,newValue) => this.setState({address:newValue})}  type="" name="" required="" />
                  <label>Address</label>
          </div>
          <div className="inputBox">
                  <input value={this.state.value} onChange = {(event,newValue) => this.setState({number:newValue})}  type="" name="" required="" />
                  <label>Phone number </label>
           </div>                   
        <input onClick={this.handleClick} type="submit" value="Signup" />
        
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