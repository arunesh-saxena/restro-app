import React from 'react';

export default class ErrorPage extends React.Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1 className="error">ErrorPage</h1>
        <h2>404 : Page not found</h2>
      </div>
    );
  }
}
