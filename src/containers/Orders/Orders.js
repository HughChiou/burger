import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import WithErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import http from '../../http';

class Orders extends Component {
  state = {
    orders: null,
    loading: true,
  };

  componentDidMount() {
    http.get('/orders.json').then((resp) => {
      console.log(resp.data);
      const orders = Object.entries(resp.data).map((d) => {
        return { id: d[0], ...d[1] };
      });
      console.log(orders);
      this.setState({ orders, loading: false });
    });
  }

  render() {
    return <div>{this.state.orders && this.state.orders.map((o) => <Order key={o.id} {...o} />)}</div>;
  }
}

export default WithErrorHandler(Orders, http);
