import React, { Component } from "react";
import "./Tables.css";
import axios from "axios";
import {ButtonToolbar } from "react-bootstrap";
import PlaceOrderModal from '../modals/PlaceOrderModal'
import LogOutComponent from "../mainpage/LogOutComponent";


class PlaceOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singledata: null,
      data: [],
      flagShowModalUpdateDelete: false,
      username: ''
     // username: this.props.location.state.username
    };
  }


  componentDidMount() {

    
    let username = '';
    if (localStorage && localStorage.getItem('username')) {
       username = JSON.parse(localStorage.getItem('username'));
      }
     this.setState({username: username})

    axios
      .get("http://localhost:3001/stock")
      .then(response => {
        console.log("response", response);
        this.setState({ data: response.data.stock });
        console.log("state.data", this.state.data);
      })
      .catch(error => {
        console.log(error);
      });
  } 

 async funcShowUpdateDeleteModal(stock){
    this.setState({ singledata: stock, flagShowModalUpdateDelete: true });
    console.log("Stock",stock);
  }

  funcCloseUpdateDeleteModal = () => {
    this.setState({ flagShowModalUpdateDelete: false, singledata: null }) 
  }
  
  render() {
    let stockModalUpdate = null;
    
    if(this.state.singledata){
      stockModalUpdate =  <PlaceOrderModal
      show = {this.state.flagShowModalUpdateDelete}
      onHide = {this.funcCloseUpdateDeleteModal}
      stock = {this.state.singledata}
      username = {this.state.username}/> 
    }

    return (
      <div id ="tableBody">
        <LogOutComponent/>
        <h1 id="tableHeaderh1"> PLACE ORDER </h1>
        <div id="divtable">
          <table border="1">
            <thead>
              <tr>
                <th>Stock_id</th>
                <th>Name</th>
                <th>Quantity_available</th>
                <th>Price_pu_SP</th>
                <th>Price_pu_CP</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map(stock => (
                <tr
                  key={stock.stock_id}
                  data-item={stock}
                  onClick={() => this.funcShowUpdateDeleteModal(stock) }
                >
                  <td>{stock.stock_id}</td>
                  <td>{stock.name}</td>
                  <td>{stock.quantity_available}</td>
                  <td>{stock.sp_pu}</td>
                  <td>{stock.cp_pu}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ButtonToolbar>           
          {stockModalUpdate}
        </ButtonToolbar>
      </div>
    );
  }
}

export default PlaceOrder;
