import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class StockInsertModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modal: false,
      
      name: '',
      quantity_available: '',
      quantity_min: '',
      sp_pu: '',
      cp_pu: '', 
      showSuccessModal: false,
      messageInsert: null};

    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.funcCloseSuccessModal = this.funcCloseSuccessModal.bind(this);

  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }


  handleSubmit(event) {
    this.setState({
      showSuccessModal: false
    });

    //event.preventDefault();
    fetch(`http://localhost:3001/stock/insert?name=${this.state.name}&quantity_available=${this.state.quantity_available}&quantity_min=${this.state.quantity_min}&sp_pu=${this.state.sp_pu}&cp_pu=${this.state.cp_pu}`)
    .then(response => {
      console.log("response", response);
      this.setState({messageInsert: "Inserted SuccessFully !!!!!"})
        
    })
    .catch(error => {
        event.preventDefault();
        console.log(error)
        this.setState({messageInsert: "ERROR ERROR ERROR !!! Please Try Again for different values"})
    })
    
    }
  
  handleChange(event){
    this.setState({[event.target.name]: event.target.value})
  }

  funcShowSuccessModal() {
    this.setState({
        showSuccessModal: true
    });
  }

  funcCloseSuccessModal() {
    this.setState({
        showSuccessModal: false
    });

    this.props.onHide();
  }

  render() {
    return (

        <div>
        <Modal isOpen={this.props.show} centered={true}>
        <form onSubmit={this.handleSubmit}>
          <ModalHeader>Insert into Stock Table</ModalHeader>
          <ModalBody>
          <div className="row">
            <div className="form-group col-md-4">
            <label>Name:</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="form-control" />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-4">
              <label>Quantity_Available:</label>
              <input type="number" name="quantity_available" value={this.state.quantity_available} onChange={this.handleChange} className="form-control" />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-4">
              <label>Quantity_Minimum:</label>
              <input type="number" name="quantity_min" value={this.state.quantity_min} onChange={this.handleChange} className="form-control" />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-4">
              <label>Selling_Price_pu:</label>
              <input type="number" name="sp_pu" value={this.state.sp_pu} onChange={this.handleChange} className="form-control" />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-4">
              <label>Cost_Price_pu:</label>
              <input type="number" name="cp_pu" value={this.state.cp_pu} onChange={this.handleChange} className="form-control" />
            </div>
          </div>
          </ModalBody>
          <ModalFooter>
            <input type="submit" value="Submit" color="primary" className="btn btn-primary" />
            <Button color="danger" onClick={this.props.onHide}>Cancel</Button>
          </ModalFooter>
          </form>
        </Modal>


        
        <Modal id="succesInsert" isOpen={this.state.showSuccessModal} >
          <ModalBody>
              {this.state.messageInsert}
          </ModalBody>
          <ModalFooter>
          <Button color="primary" onClick={this.funcCloseSuccessModal}>OK</Button>
          </ModalFooter>
          
        </Modal>



        </div>
      
    );
  }
}