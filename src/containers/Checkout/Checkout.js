import React, { Component } from 'react';
import { Route } from 'react-router';
import Summary from '../../components/Order/Summary/Summary';
import OrderInfo from '../OrderInfo/OrderInfo';

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 0,
      meat: 0,
      cheese: 0,
      bacon: 0,
    },
    total: 0,
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    console.log(query);
    const ingredients = {};
    [...query.entries()].forEach((e) => {
      if (e[0] === 'price') {
        const total = +e[1];
        this.setState({ total });
        return;
      }
      ingredients[e[0]] = +e[1];
    });
    this.setState({ ingredients });
  }

  render() {
    return (
      <div>
        <Summary ingredients={this.state.ingredients} total={this.state.total} />
        <Route
          path={this.props.match.path + '/order-info'}
          render={() => <OrderInfo {...this.props} ingredients={this.state.ingredients} total={this.state.total} />}
        />
      </div>
    );
  }
}

export default Checkout;
