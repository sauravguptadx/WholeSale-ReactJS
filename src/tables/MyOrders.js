import React, { Component } from "react";
import "./Tables.css";
import axios from "axios";
import {Button, ButtonToolbar } from "react-bootstrap";
import StockInsertModal from '../modals/StockInsertModal'
import StockUpdateDeleteModal from '../modals/StockUpdateDeleteModal'
import LogOutComponent from "../mainpage/LogOutComponent";


class MyOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singledata: null,
      data: [],
      addModalInsertShow: false,
      addModalUpdateDeleteShow: false,
      username: this.props.location.state.username
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/myorders?username=${this.state.username}`)
      .then(response => {
        console.log("response", response);
        this.setState({ data: response.data.stock });
        console.log("state.data", this.state.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  fetchDetails(stock) {
    console.log("We need to get the details for ", stock.stock_id);
  }

  
 async showUpdateDeleteModal(stock){
    this.setState({ singledata: stock, addModalUpdateDeleteShow: true });
    console.log("Stock",stock);
  }

  addModalUpdateDeleteClose = () => {this.setState({ addModalUpdateDeleteShow: false, singledata: null }) }
  
  render() {
    let addModalInsertClose = () => this.setState({ addModalInsertShow: false });
    let stockModalUpdate = null;
    
    if(this.state.singledata){
      stockModalUpdate =  <StockUpdateDeleteModal
      show = {this.state.addModalUpdateDeleteShow}
      onHide = {this.addModalUpdateDeleteClose}
      stock = {this.state.singledata}/> 
    }
    return (
      <div  id ="tableBody">
         <LogOutComponent/>
        <h1  id="tableHeaderh1"> MY ORDERS </h1>
        <div id="divtable">
          <table border="1">
            <thead>
              <tr>
                <th>Order_id</th>
                <th>Stock_Name</th>
                <th>Quantity_Ordered</th>
                <th>TotalPrice</th>
                <th>IsPaid</th>
                <th>Pending</th>
                <th>Date of Delivery</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map(stock => (
                <tr
                  key={stock.order_id}
                  data-item={stock}
                  onClick={() => this.showUpdateDeleteModal(stock) }
                >
                  <td>{stock.order_id}</td>
                  <td>{stock.stock_name}</td>
                  <td>{stock.quantity_ordered}</td>
                  <td>{stock.totalprice}</td>
                  <td>{stock.ispaid}</td>
                  <td>{stock.pending}</td>
                  <td>{stock.date_of_delivery.slice(0,10)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ButtonToolbar>
        
          <StockInsertModal
            show = {this.state.addModalInsertShow}
            onHide = {addModalInsertClose}
            stock_id = "4"/>

           
          {stockModalUpdate}
            
        </ButtonToolbar>
      </div>
    );
  }
}

export default MyOrders;
