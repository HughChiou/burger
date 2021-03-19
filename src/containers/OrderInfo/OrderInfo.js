import React, { Component } from 'react';

import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import http from '../../http';
import classes from './OrderInfo.module.css';

class OrderInfo extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
    loading: false,
  };

  orderHandler = (e) => {
    e.preventDefault();
    // console.log(this.props.ingredients);
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.total,
      customer: {
        name: this.props.name,
        email: this.props.email,
        address: this.props.address,
      },
      deliveryMethod: 'fastest',
    };

    let successed = false;

    http
      .post('/orders.json', order)
      .then((resp) => (successed = true))
      .catch((err) => (successed = false))
      .finally((_) => {
        this.setState({ loading: false, purchasing: false });
        if (successed) {
          this.props.history.push('/');
        }
      });
  };

  render() {
    let form = (
      <form className={classes.Form}>
        <input type="text" name="name" placeholder="your name..." />
        <input type="text" name="email" placeholder="your email..." />
        <input type="text" name="street" placeholder="your street..." />
        <input type="text" name="zip" placeholder="your zip code..." />
        <Button buttonType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.OrderInfo}>
        <h4>Enter your order info</h4>
        {form}
      </div>
    );
  }
}

export default OrderInfo;
