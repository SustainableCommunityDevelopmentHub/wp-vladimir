// imports
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NavigationRouter from '../Router/NavigationRouter';

// styles
import styles from './NavigationContainer.module.scss';

// NavigationContainer component
class NavigationContainer extends Component {
  // renders the NavigationContainer
  render() {
    // returns the elements
    return (
      <NavigationRouter className={styles.navigation}>
        <span>Counter:</span>
        <button onClick={this.props.dispatchClick.bind(this,1)}>+1</button>
        <button onClick={this.props.dispatchClick.bind(this,2)}>+2</button>
        <button onClick={this.props.dispatchClick.bind(this,3)}>+3</button>
      </NavigationRouter>
    );
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
      dispatchClick: (value) => { return {type: 'test-plus-plus', payload: value}; }
    }, dispatch);
  
  // returns the actions
  return actions;
}

// exports NavigationContainer
export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer);