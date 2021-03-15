import React from 'react';
import PropTypes from 'prop-types';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';

const Toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <div>MENU</div>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
        <NavItems />
      </nav>
    </header>
  );
};

Toolbar.propTypes = {};

export default Toolbar;