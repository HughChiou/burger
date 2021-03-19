import React from 'react';
import PropTypes from 'prop-types';
import classes from './Order.module.css';

const Order = (props) => {
  return (
    <div className={classes.Order}>
      <p>Ingredients: Salad (1)</p>
      <p>
        Price: <strong>USD 5.45</strong>
      </p>
    </div>
  );
};

Order.propTypes = {};

export default Order;
