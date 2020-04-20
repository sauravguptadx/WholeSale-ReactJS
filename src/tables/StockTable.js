import React, { Component } from "react";
import "./Tables.css";
import axios from "axios";
import {Button, ButtonToolbar } from "react-bootstrap";
import StockInsertModal from '../modals/StockInsertModal'
import StockUpdateDeleteModal from '../modals/StockUpdateDeleteModal'
import LogOutComponent from "../mainpage/LogOutComponent";


class StockTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singledata: null,
      data: [],
      flagShowModalInsert: false,
      flagShowModalUpdateDelete: false
    };
  }

  componentDidMount() {
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
    let funcCloseInsertModal = () => this.setState({ flagShowModalInsert: false });
    let stockModalUpdate = null;
    
    if(this.state.singledata){
      stockModalUpdate =  <StockUpdateDeleteModal
      show = {this.state.flagShowModalUpdateDelete}
      onHide = {this.funcCloseUpdateDeleteModal}
      stock = {this.state.singledata}/> 
    }

    return (
      <div id ="tableBody">
        <LogOutComponent/>
        <h1 id="tableHeaderh1"> STOCK TABLE </h1>
        <div id="divtable">
          <table border="1">
            <thead>
              <tr>
                <th>Stock_id</th>
                <th>Name</th>
                <th>Quantity_available</th>
                <th>Quantity_min</th>
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
                  <td>{stock.quantity_min}</td>
                  <td>{stock.sp_pu}</td>
                  <td>{stock.cp_pu}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ButtonToolbar>
          <Button id="hInsert"
            onClick={() => this.setState({ flagShowModalInsert: true })}
          >Insert </Button>
        
          <StockInsertModal
            show = {this.state.flagShowModalInsert}
            onHide = {funcCloseInsertModal}
          />

           
          {stockModalUpdate}
            
        </ButtonToolbar>
      </div>
    );
  }
}

export default StockTable;
