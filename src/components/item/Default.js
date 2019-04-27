import React, { Component } from "react";

export default class Default extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s10 mx-auto center-align text-uppercase pt-5">
            <h1>404</h1>
            <h1>error</h1>
            <h2>Page not found</h2>
            <h3>request url
              {' '}<span className="red-text">
                {this.props.location.pathname}
              </span>{' '}
              was not found
            </h3>
          </div>
        </div>
      </div>
    );
  }
}
