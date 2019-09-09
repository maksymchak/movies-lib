import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import NewMovie from '../new-movie';

import './add-form.css';

class Modal extends Component {
  
  render() {
    const modalRoot = document.getElementById('modal-root');

    return modalRoot && ReactDOM.createPortal(
      this.props.children,
      modalRoot,
    );
  }
}

class AddForm extends Component {

  state = {
    isOpen: false
  };

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }; 

  render() {
    return(
      <Fragment>
        <a className="btn btn-add" onClick={this.toggleModal} href="#/">
          <i className="material-icons">add</i>
        </a> 
        {this.state.isOpen &&
        <Modal>
          <div className="modal-overlay">
            <NewMovie onClose={this.toggleModal}/>
          </div>
        </Modal>}
      </Fragment>
    );
  }
}

export default AddForm;
