import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

class AppContainer extends Component {
  render() {
    return (
      <div className="app-container">
        <Header {...this.props} />
        <div className="page-container container">
          {renderRoutes(this.props.route.routes)}
        </div>
        <Footer />
      </div>
    );
  }
}

export default AppContainer;
