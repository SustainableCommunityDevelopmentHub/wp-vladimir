// imports
import React, { Component } from 'react';
import ContentRouter from '../Router/ContentRouter';
import TestComponent from './../TestComponent/TestComponent';

// styles
import styles from './ContentContainer.module.scss';

// ContentContainer component
class ContentContainer extends Component {
  // renders the ContentContainer
  render() {
    // returns the elements
    return (
      <ContentRouter>
        <section className={styles.container}>
          <TestComponent />
        </section>
      </ContentRouter>
    );
  }
}

// exports ContentContainer
export default ContentContainer;