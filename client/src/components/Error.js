import React, { Component } from 'react';

class Error extends Component {
  render() {
    return <div class="notification is-warning">
              <button class="delete"></button>
              {this.props.message}
            </div>
  }
}
export default Error;