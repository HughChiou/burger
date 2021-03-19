import React from 'react';
import PropTypes from 'prop-types';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './Summary.module.css';
import { withRouter } from 'react-router';

const Summary = (props) => {
  console.log(props);

  const continueCLicked = () => {
    props.history.replace({
      pathname: '/Checkout/order-info',
    });
  };

  const cancelClicked = () => {
    props.history.goBack();
  };

  return (
    <div className={classes.Summary}>
      <h1>Hope it tasts well!!</h1>
      <div>
        <Burger ingredients={props.ingredients} />
      </div>
      <div>
        <Button buttonType="Danger" clicked={cancelClicked}>
          CANCEL
        </Button>
        <Button buttonType="Success" clicked={continueCLicked}>
          CONTINUE
        </Button>
      </div>
    </div>
  );
};

Summary.propTypes = {
  ingredients: PropTypes.object,
  total: PropTypes.number,
};

export default withRouter(Summary);
