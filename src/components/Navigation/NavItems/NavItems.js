import React from 'react';
import PropTypes from 'prop-types';
import classes from './NavItems.module.css';
import NavItem from './NavItem.js/NavItem';

const NavItems = (props) => {
  return (
    <ul className={classes.NavItems}>
      <NavItem link="/" active>
        Burger Builder
      </NavItem>
      <NavItem link="/">Checkout</NavItem>
    </ul>
  );
};

NavItems.propTypes = {};

export default NavItems;
