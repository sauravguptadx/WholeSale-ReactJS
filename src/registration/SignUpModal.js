import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class SignUpModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modal: false,
      
      name: '',
      username: '',
      password: '',
      confirmPassword: '',
      address: '', 
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

  //
    if(this.state.password === this.state.confirmPassword){
      //  event.preventDefault();
    fetch(`http://localhost:3001/stock/signup?name=${this.state.name}&username=${this.state.username}&password=${this.state.password}&address=${this.state.address}`)
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
    else
    {   
        event.preventDefault();
        alert("Passwords dont match!!!!")
    }


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
        <Modal id="signUpModal" isOpen={this.props.show} centered={true}>
        <form onSubmit={this.handleSubmit}>
        <ModalHeader>Sign Up</ModalHeader>
          <ModalBody>
          <div className="row">
            <div className="form-group col-md-4">
            <label>Name:</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="form-control" />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-4">
              <label>Username:</label>
              <input type="text" name="username" value={this.state.username} onChange={this.handleChange} className="form-control" />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-4">
              <label>Password:</label>
              <input type="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control" />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-4">
              <label>Confirm Password:</label>
              <input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} className="form-control" />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-4">
              <label>Address:</label>
              <input type="text" name="address" value={this.state.address} onChange={this.handleChange} className="form-control" />
            </div>
          </div>
          </ModalBody>
          <ModalFooter>
          <input type="submit" value="Sign Up" color="primary" className="btn btn-primary" />
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