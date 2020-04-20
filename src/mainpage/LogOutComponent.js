import React, { Component } from 'react';
import './LogOutComponent.css'
import { Redirect } from 'react-router';

class LogOutComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            flag: false
        }
    }

    render() {
        if(this.state.flag === true)
               return(<Redirect to="/" />)
        return (
            <div className = 'logOuttt'>
                <h1> WHOLESALE MANGAGEMENT SYSTEM</h1>
                <button type="submit" onClick = {() => this.setState({ flag: true })} className="logOutButtonre">LogOut</button>
            </div>
            
        )
    }
}

export default LogOutComponent;