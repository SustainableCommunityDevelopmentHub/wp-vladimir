import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import styles from './TestComponent.module.scss';

class TestComponent extends Component {
  // constructor
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  // handle click
  handleClick() {
      this.props.dispatchClick();
  }

  // render function
  render() {
    return (
      <div className={styles.container}>
        <span className={styles.value}>
          <strong>Value: </strong> {this.props.counter}
        </span>
        <br/>
        <button onClick={this.handleClick}>counter++</button>
    </div>
    )
  }
}

// maps state to props
function mapStateToProps(state) {
  return { counter: state.test.counter }
}

// maps dispatch to props
function mapDispatchToProps(dispatch) {
  // binds dispatch to actions
  let actions = bindActionCreators({
      dispatchClick: () => { return {type: 'test-plus-plus', payload: 1}; }
    }, dispatch);
  
  // returns the actions
  return actions;
}

// exports the component
export default connect(mapStateToProps, mapDispatchToProps)(TestComponent);
