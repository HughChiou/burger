import React from 'react';
import PropTypes from 'prop-types';
import classes from './Order.module.css';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

const Order = (props) => {
  console.log(props);
  return (
    <div className={classes.Order}>
      <h3>Order Id: {props.id}</h3>
      {[...Object.entries(props.ingredients)].map((ing) => (
        <Chip
          key={ing[0]}
          label={ing[0]}
          color="secondary"
          variant="outlined"
          avatar={<Avatar>{ing[1]}</Avatar>}
          style={{ textTransform: 'capitalize', margin: '0 3px' }}></Chip>
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
