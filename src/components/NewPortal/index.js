/*
 * @Author: your name
 * @Date: 2020-02-09 16:01:28
 * @LastEditTime : 2020-02-09 16:04:25
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Ed
 * @FilePath: \component\src\components\NewPortal\index.js
 */
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
