import React from 'react';
import PropTypes from 'prop-types';
import classes from './Modal.module.css';

const Modal = (props) => {
  const modalStyle = {
    tansform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
    opacity: props.show ? '1' : '0',
  };
  return (
    <div className={classes.Modal} style={modalStyle}>
      {props.children}
    </div>
  );
};

Modal.propTypes = {
  show: PropTypes.bool,
};

export default Modal;
