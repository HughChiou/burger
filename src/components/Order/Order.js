import React from 'react';
import PropTypes from 'prop-types';
import classes from './Order.module.css';

const Order = (props) => {
  console.log(props);
  return (
    <div className={classes.Order}>
      <h3>Order Id: {props.id}</h3>
      {[...Object.entries(props.ingredients)].map((ing) => (
        <p key={ing[0]}>
          Ingredients: <span style={{ textTransform: 'capitalize' }}>{ing[0]}</span> ({ing[1]})
        </p>
      ))}
      <p>
        Price: <strong>USD {props.price.toFixed(2)}</strong>
      </p>
    </div>
  );
};

Order.propTypes = {
  ingredients: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,
};

export default Order;
