import React from 'react';
import PropTypes from 'prop-types';

import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';

const Logo = (props) => {
  return (
    <div
      className={classes.Logo}
      style={{ height: props.height }}
    >
      <img src={burgerLogo} alt="MyBurger" />
    </div>
  );
};

Logo.propTypes = {
  src: PropTypes.string,
  height: PropTypes.string,
};

export default Logo;
