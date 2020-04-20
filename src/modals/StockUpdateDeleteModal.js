import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export default class StockUpdateDeleteModal2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modal: false,
        stock_id: this.props.stock.stock_id,
        name: this.props.stock.name,
        quantity_available: this.props.stock.quantity_available,
        quantity_min: this.props.stock.quantity_min,
        sp_pu: this.props.stock.sp_pu,
        cp_pu: this.props.stock.cp_pu,
        flagShowConfirmDeleteModal: false,
        flagShowUpdateModal: false,
        flagShowChooseModal: this.props.show,

        showSuccessModal: false,
        messageDelete: null,
        messageUpdate: null
      };
    
    this.toggle = this.toggle.bind(this);
    
    this.funcShowConfirmDeleteModal = this.funcShowConfirmDeleteModal.bind(this);
    this.funcShowUpdateModal = this.funcShowUpdateModal.bind(this);

    this.funcCloseConfirmDeleteModal = this.funcCloseConfirmDeleteModal.bind(this);
    this.funcCloseUpdateModal = this.funcCloseUpdateModal.bind(this);

    this.funcCloseAll = this.funcCloseAll.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  funcShowConfirmDeleteModal() {
    this.setState({
        flagShowConfirmDeleteModal: true
    });
  }

  
  funcCloseConfirmDeleteModal() {
    this.setState({
        flagShowConfirmDeleteModal: false
    });
  }

  funcShowUpdateModal() {
    this.setState({
        flagShowUpdateModal: true
    });
  }

  funcCloseUpdateModal() {
    this.setState({
        flagShowUpdateModal: false
    });
  }

  funcCloseAll() {
    this.funcCloseConfirmDeleteModal()
    this.funcCloseUpdateModal()
    this.props.onHide()
  }

  handleDelete(event) {
    this.setState({
      showSuccessModal: false
    });

    fetch(`http://localhost:3001/stock/delete?name=${this.state.name}`)
    .then(response => {
      console.log("response", response);
      this.setState({messageDelete: "Deleted SuccessFully !!!!!"});
      this.funcCloseAll()
    })
    .catch(error => {
        event.preventDefault();
        console.log("error",error)
        this.setState({messageDelete: "ERROR ERROR ERROR !!! Please Try Again for different values"})
    })

    
  }

  handleUpdate(event) {
    this.setState({
      showSuccessModal: false
    });

    fetch(`http://localhost:3001/stock/update?name=${this.state.name}&quantity_available=${this.state.quantity_available}&quantity_min=${this.state.quantity_min}&sp_pu=${this.state.sp_pu}&cp_pu=${this.state.cp_pu}&stock_id=${this.state.stock_id}`)
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

  handleChange(event){
    this.setState({[event.target.name]: event.target.value})
  }
  
  
  render() {
      
    return (
        
        <div>
         <Modal id="chooseOperation" isOpen={this.props.show} toggle={this.props.onHide} centered={true}>
          <ModalHeader>Choose Operation</ModalHeader>
          <ModalBody>
              <h4>Please choose the operation you want to perform.</h4> <br/>
              Update - to Update the selected row <br/>
              Delete - to Delete the selected row
          </ModalBody>
          <ModalFooter>
          <Button color="primary" onClick={this.funcShowUpdateModal}>Update</Button>
          <Button color="primary" onClick={this.funcShowConfirmDeleteModal}>Delete</Button> 
          <Button color="danger" onClick={this.props.onHide}>Cancel</Button>
          </ModalFooter>
          
        </Modal>

      
        <Modal id="confirmDelete" isOpen={this.state.flagShowConfirmDeleteModal}>
          <ModalHeader>Confirm Delete</ModalHeader>
          <ModalBody>
              <h4>Are you sure you want to delete ?</h4> <br/>
          </ModalBody>
          <ModalFooter>
          <form onSubmit = {this.handleDelete}>
          <input type="submit" value="Delete"  color="primary" className="btn btn-primary" />
          </form>
          <Button color="primary" onClick={this.funcCloseConfirmDeleteModal}>Cancel</Button>
          </ModalFooter>
          
        </Modal>





        <Modal isOpen={this.state.flagShowUpdateModal} centered={true}>
        <form >
          <ModalHeader>Update</ModalHeader>
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
            <input type="submit" value="Submit" onClick={this.handleUpdate} color="primary" className="btn btn-primary" />
            <Button color="danger" onClick={this.funcCloseUpdateModal}>Cancel</Button>
          </ModalFooter>
          </form>
        </Modal>
        </div>
      
    );
  }
}