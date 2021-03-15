import React from 'react';
import PropTypes from 'prop-types';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Empty';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => {
  const modalStyles = {
    transform: props.show
      ? 'translateY(0)'
      : 'translateY(-100vh)',
    opacity: props.show ? '1' : '0',
  };

  return (
    <Aux>
      <Backdrop
        show={props.show}
        clicked={props.modalClosed}
      ></Backdrop>
      <div className={classes.Modal} style={modalStyles}>
        {props.children}
      </div>
    </Aux>
  );
};

Modal.propTypes = {
  show: PropTypes.bool,
  modalClosed: PropTypes.func,
};

export default Modal;
