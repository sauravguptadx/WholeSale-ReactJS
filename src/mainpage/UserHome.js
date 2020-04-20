import React, { Component } from 'react';
import './AdminHome.css'
import { Link } from 'react-router-dom'

import LogOutComponent from './LogOutComponent';

class UserHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: this.props.location.state.username
        };
      }

      componentWillMount(){
        let username = '';
        if (localStorage && localStorage.getItem('username')) {
           username = JSON.parse(localStorage.getItem('username'));
          }
         this.setState({username: username})
      } 

    render() {
        return <div id = "mainhome">
             <LogOutComponent/>
            <h1 className = 'slickSlider'> WHOLESALE MANGAGEMENT SYSTEM</h1>
            <div  className = "placeOrder">
            <Link to={{
                        pathname: '/UserHome/PlaceOrder',
                        state: { username: this.state.username }
                }}><h2> PLACE ORDER</h2></Link>
            </div>
            <div  className = "myOrder">
            <Link to={{
                        pathname: '/UserHome/MyOrders',
                        state: { username: this.state.username }
                }}><h2> MY ORDERS </h2></Link>

            </div>
         </div>
    }

}

export default UserHome;