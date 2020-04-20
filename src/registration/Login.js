import React, { Component } from 'react';
import { Redirect } from 'react-router';
import {Button, ButtonToolbar } from "react-bootstrap";
import axios from "axios";
import SignUpModal from './SignUpModal'
import "./LoginCSS.css";

class Login extends Component{

    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            userdata: null,
            showSignUpModal: false,
            isLoggedin: false
        }
    }


    handleChange = (event) => {
            this.setState({[event.target.name]: event.target.value})
          }


    handleSubmit = (event) => {
       event.preventDefault();
        axios.get(`http://localhost:3001/stock/login?username=${this.state.username}&password=${this.state.password}`)
        .then(response => {
            console.log("response", response);
            this.setState({ userdata: response.data.stock[0], isLoggedin:true });
            console.log("state.data", this.state.userdata);
            
          })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        let closeSignUpModal = () => {this.setState({ showSignUpModal: false }) }
        if(this.state.isLoggedin === true)
        {
            localStorage.setItem('username',
            JSON.stringify(this.state.username));
            
            if(this.state.userdata.isadmin === '0')
               return(<Redirect to={{
                        pathname: '/UserHome',
                        state: { username: this.state.username }
                }}/>
                )
            else
                return(<Redirect to="/AdminHome" />)
        }
        return (<div id="loginBody">
            <div id="maintitle">
                <h1>WHOLESALE</h1>
                <h1>MANAGEMENT</h1>
                <h1>SYSTEM</h1>
            </div>
            <div id="form_area">
                <form onSubmit = {this.handleSubmit}>
                
                    <h2>Log In</h2>
                    <p>Username</p>
                    <input type = "text"
                                name = "username"
                                value =  {this.state.username}
                                placeholder="Enter your username"
                                onChange = {this.handleChange}/>
                    <p>Password</p>
                    <input type = "password"
                                name = "password"
                                value = {this.state.password}
                                placeholder="Enter your password" 
                                onChange = {this.handleChange}/>
                    <input type ="submit" id="loginButton" value="Submit" />
                    <p id ="signUpp">Dont have an Account ?</p>
                    <p id ="signUpp">SignUp Now !!!</p>
        </form>
        <ButtonToolbar>
            <Button id="signUpButton"  onClick={() => this.setState({ showSignUpModal: true })}
            >SignUp </Button>
      
        <SignUpModal
          show = {this.state.showSignUpModal}
          onHide = {closeSignUpModal} />

          
      </ButtonToolbar>
      </div>
      </div>
        )
                 
    }
}

export default Login;