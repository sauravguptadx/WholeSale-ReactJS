import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export default class StockUpdateDeleteModal2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modal: false,
        stock_id: this.props.stock.stock_id,
        name: this.props.stock.name,
        username: this.props.username,
        sp_pu: this.props.stock.sp_pu,
        quantity_available: this.props.stock.quantity_available,
        quantity: 0,
        totalPrice: 0,
        dateOfDelivery: "2010-11-25",
        flagShowConfirmDeleteModal: false,
        flagShowUpdateModal: false,
        flagShowChooseModal: this.props.show,

        showSuccessModal: false,
        messageDelete: null,
        messageUpdate: null
      };

    this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  
  handleUpdate(event) {
    this.setState({
      showSuccessModal: false
    });
    fetch(`http://localhost:3001/placeorder?username=${this.state.username}&stock_name=${this.state.name}&quantity_ordered=${this.state.quantity}&totalprice=${this.state.totalPrice}&date_of_delivery=${this.state.dateOfDelivery}`)
    .then(response => {
      console.log("response", response);
      this.setState({messageUpdate: "Inserted SuccessFully !!!!!"})
      this.funcCloseAll()
    })
    .catch(error => {
        event.preventDefault();
        console.log("error",error)
        this.setState({messageUpdate: "ERROR ERROR ERROR !!! Please Try Again for different values"})
    })

    
  }

  handleChangeQuantity(event){
    this.setState({quantity: event.target.value},
        () => {this.setState({totalPrice: this.state.quantity*this.state.sp_pu})}
        )
  }
  
  
  render() {
      
    return (
        
        <div>
        <Modal isOpen={this.props.show} centered={true} toggle={this.props.onHide}>
        <form >
          <ModalHeader>Place Order</ModalHeader>
          <ModalBody>
          <div className="row">
            <div className="form-group col-md-4">
            <label>UserName:</label>
            <input type="text" name="username" value={this.state.username}  className="form-control" />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-4">
              <label>Stock_Name:</label>
              <input type="text" name="stock_name" value={this.state.name} className="form-control" />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-4">
              <label>Quantity:</label>
              <input type="number" name="quantity" value={this.state.quantity} onChange={this.handleChangeQuantity} className="form-control" />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-4">
              <label>TotalPrice:</label>
              <input type="number" name="totalPrice" value={this.state.totalPrice} className="form-control" />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-4">
              <label>Date of Delivery:</label>
              <input type="text" name="dateOfDelivery" value={this.state.dateOfDelivery} onChange={this.handleChange} className="form-control" />
            </div>
          </div>
          </ModalBody>
          <ModalFooter>
            <input type="submit" value="Submit" onClick={this.handleUpdate} color="primary" className="btn btn-primary" />
            <Button color="danger" onClick={this.props.onHide}>Cancel</Button>
          </ModalFooter>
          </form>
        </Modal>
        </div>
      
    );
  }
}