import React from 'react';
import '../../App.css';
import axios from 'axios';
export default class Contact extends React.Component{
    constructor() {
      super();
      this.state = { 
          name:'',
          email:'',
          title:'',
          message:'' ,
          Subject: '' ,
      };
      this.handleClick = this.handleClick.bind(this);
      this.handleEmail = this.handleEmail.bind(this);
      this.handleSubject = this.handleSubject.bind(this);
      this.handleName = this.handleName.bind(this);
      this.handleMassage = this.handleMassage.bind(this);

     }
     

    handleClick(e) {
        let data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }

        axios.post('API_URI', data)
        .then( res => {
            this.setState({ sent: true }, this.resetForm());
            alert("thanks for contacting  us ");
        })
        .catch( () => {
          console.log('Message not sent')
        })
    }
    handleName(event) {
        event.preventDefault();
          this.setState({
            name: event.target.value 
          });
          
    }

    handleEmail(event) {
        event.preventDefault();
          this.setState({
            email: event.target.value 
          });
          
    }
    handleSubject(event) {
        event.preventDefault();
          this.setState({
            title: event.target.value 
          });
          
    }
    handleMassage(event) {
        event.preventDefault();
          this.setState({
            message: event.target.value 
          });
          
    }

   

render () {

    return (

        <div className="contact">
            <div className="container">

                <h1 className="title">Contact us</h1>

                <div className="info">
                    <i className="fas fa-map-marker-alt"></i>
                    <h2>Address</h2>
                    <h5>10th Abuqir - Alex city</h5>

                </div>

                <div className="info">
                    <i className="fas fa-phone"></i>
                    <h2>Phone</h2>
                    <h5>010xxxxxxxxx</h5>
                </div>

                <div className="info">
                    <i className="fas fa-envelope"></i>
                    <h2>Email</h2>
                    <h5>fruit-market@gmail.com</h5>
                </div>

        <form className="conform">
            <input onChange={this.handleName}  placeholder="Name" /> <input  onChange={this.handleEmail} type="email" placeholder="Email" />
            <input  onChange={this.handleSubject} placeholder="Subject" />
            <textarea  onChange={this.handleMassage} placeholder="Message" rows="4" cols="5"></textarea>
            <input  onClick={this.handleClick} type="submit" value="Send message" /> 
        </form>        
            </div>
        </div>


    );
}












}









