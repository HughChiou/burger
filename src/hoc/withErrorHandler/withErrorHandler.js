import axios from 'axios';
import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';

import Aux from '../Aux/Empty';

const WithErrorHandler = (WrappedComponent, http) => {
  return class extends Component {
    state = { err: null };
    reqi;
    respi;

    componentWillMount() {
      this.reqi = http.interceptors.request.use((req) => {
        this.setState({ err: null });

        return req;
      });
      this.respi = http.interceptors.response.use(
        (resp) => resp,
        (rej) => {
          console.log({ rej });

          this.setState({ err: rej });

          return rej;
        },
      );
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqi);
      axios.interceptors.response.eject(this.respi);
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
