import React from 'react';
import PropTypes from 'prop-types';
import classes from './NavItem.module.css';
import { NavLink } from 'react-router-dom';

const NavItem = (props) => {
  return (
    <li className={classes.NavItem}>
      <NavLink exact activeClassName={classes.active} className={props.active ? classes.active : null} to={props.link}>
        {props.children}
      </NavLink>
    </li>
  );
};

NavItem.propTypes = {
  link: PropTypes.string,
  active: PropTypes.bool,
};

export default NavItem;
