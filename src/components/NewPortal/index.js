import React, { Component } from 'react';
import ReactDom from 'react-dom'

class NewProtal extends Component {
  constructor() {
    super();
    this.node = document.createElement('div');
    document.body.appendChild(this.node);
  }
  render() {
    const {visible, children} = this.props;
    return visible && ReactDom.createPortal(children, this.node)
  }
}

export default NewProtal
