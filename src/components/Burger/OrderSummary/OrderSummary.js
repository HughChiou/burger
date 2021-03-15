import React from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Empty';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(
    props.ingredients,
  ).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: 'capitalize' }}>
          {igKey}
        </span>
        : {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>
        A delicious burger with the following ingredients:
      </p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price</strong>:{' '}
        {props.price.toFixed(2)}
      </p>
      <p>Continue to Checkout?</p>
      <Button
        buttonType="Danger"
        clicked={props.purchaseCanceled}
      >
        CANCEL
      </Button>
      <Button
        buttonType="Success"
        clicked={props.purchaseContinued}
      >
        CONTINUE
      </Button>
    </Aux>
  );
};

OrderSummary.propTypes = {
  ingredients: PropTypes.object,
};

export default OrderSummary;
