import React from 'react';
import PropTypes from 'prop-types';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './Summary.module.css';

const Summary = (props) => {
  return (
    <div className={classes.Summary}>
      <h1>Hope it tasts well!!</h1>
      <div>
        <Burger ingredients={props.ingredients} />
      </div>
      <div>
        <Button buttonType="Danger" clicked={(e) => console.log(e)}>
          CANCEL
        </Button>
        <Button buttonType="Success" clicked={(e) => console.log(e)}>
          CONTINUE
        </Button>
      </div>
    </div>
  );
};

Summary.propTypes = {
  ingredients: PropTypes.object,
};

export default Summary;
