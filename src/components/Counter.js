import React, { Component, PropTypes } from 'react';
import Value from './Value';
import Control from './Control';

const propTypes = {
}

const defaultProps = {
}

class Counter extends Component {
  render() {
    return (
        <div>
            <Value number={-11}/>
            <Control/>
        </div>
    );
  }
}

export default Counter;