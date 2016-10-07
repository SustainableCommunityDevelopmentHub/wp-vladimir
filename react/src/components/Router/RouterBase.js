// imports
import React, { Component } from 'react';

// RouterBase component
class RouterBase extends Component {
  // constructor
  constructor(props) {
    super(props);

    // binds the functions
    this.retrieveUrlData = this.retrieveUrlData.bind(this);
    this.getRoutedElements = this.getRoutedElements.bind(this);
  }

  // retrieves the url data
  retrieveUrlData() {
    // returns the location object from the window or null
    return window ? window.location : null;
  }

  // routing function
  // you should make your own router that extends this and override this function
  getRoutedElements() {
    // returns the children
    // remember, this is only the base. Don't use this.
    // Make your own router :)
    return this.props.children;
  }

  // renders ruter
  render() {
    // retrieves the routed elements
    const routedElements = this.getRoutedElements();

    // returns the routed elements
    return (
      <section>
        {routedElements}
      </section>
    );
  }
}

// exports router
export default RouterBase;