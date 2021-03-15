import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';

import Aux from '../Aux/Empty';

const WithErrorHandler = (WrappedComponent, http) => {
  return class extends Component {
    state = { err: null };

    componentWillMount() {
      http.interceptors.request.use((req) => {
        this.setState({ err: null });

        return req;
      });
      http.interceptors.response.use(
        (resp) => resp,
        (rej) => {
          console.log({ rej });

          this.setState({ err: rej });

          return rej;
        },
      );
    }

    errorConfirmHandler = () => {
      console.log('close');
      this.setState({ err: null });
    };

    render() {
      return (
        <Aux>
          <Modal show={!!this.state.err} modalClosed={this.errorConfirmHandler}>
            {this.state.err ? this.state.err.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};

export default WithErrorHandler;
