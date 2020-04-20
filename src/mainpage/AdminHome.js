import React, { Component } from 'react';
import './AdminHome.css'
import { Link } from 'react-router-dom'
import LogOutComponent from './LogOutComponent';

class AdminHome extends Component {

    render() {
        return (<div id = "mainhome">
            <LogOutComponent/>
            <div className = 'slickSlider'>
                <h1> WHOLESALE MANGAGEMENT SYSTEM</h1>
            </div>
            <div className = "stockTable">
                <Link to="/AdminHome/StockTable"><h2 > Stock Table</h2></Link>
            </div>
            <div  className = "customersTable">
                <Link to="/AdminHome/CustomersTable"><h2> Customer Table</h2></Link>
            </div>
            <div className = "buyersTable">
                <Link to="/AdminHome/BuyersTable"><h2> Buyers Table</h2></Link>
            </div>    
            <div className = "ordersTable">
                <Link to="/AdminHome/OrdersTable"><h2> Orders Table</h2></Link>
            </div>    
            <div className = "boughtTable">
                <Link to="/AdminHome/BoughtTable"><h2> Bought List Table</h2></Link>
            </div>
         </div>
        )
    }

}

export default AdminHome;