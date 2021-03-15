import React from 'react';
import PropTypes from 'prop-types';
import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button
      className={[
        classes.Button,
        classes[props.buttonType],
      ].join(' ')}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  clicked: PropTypes.func,
  buttonType: PropTypes.string,
};

export default Button;
