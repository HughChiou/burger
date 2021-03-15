import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Aux/Empty';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }

  render() {
    const modalStyles = {
      transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
      opacity: this.props.show ? '1' : '0',
      pointerEvents: this.props.show ? 'all' : 'none',
    };

    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed}></Backdrop>
        <div className={classes.Modal} style={modalStyles}>
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

Modal.propTypes = {
  show: PropTypes.bool,
  modalClosed: PropTypes.func,
};

export default Modal;
