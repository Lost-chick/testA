/*
 * @Author: your name
 * @Date: 2020-02-18 16:47:05
 * @LastEditTime: 2020-02-18 22:32:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \testA\src\components\Tree\index.js
 */
import React, { Component } from 'react';
import './index.less'

class TreeNode extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    }
  }
  show = () => {
    this.setState({ show: !this.state.show })
  }
  render() {
    const { show } = this.state;
    const { id, name, pid, children, hasChild, addChild, deleteItem, moveUp, moveDown, bortherLen, index, isThree } = this.props;
    return (
      <div className="tree-node">
        <div className="tree-hover">
          {
            hasChild ?
              <span
                onClick={this.show}
              >
                {show ? '-' : '+'}
              </span> : <span className="space"></span>
          }
          {name}
          <div className="tree-operation">
            {(pid && index !== 0) ? <span onClick={moveUp}>上移</span> : null}
            {(pid && index !== bortherLen - 1) ? <span onClick={moveDown}>下移</span> : null}
            {!isThree && <span
              onClick={addChild}
            >添加下一级</span>}
            {pid ? <span onClick={deleteItem}>删除</span> : null}
          </div>
        </div>

        <ul className={show ? 'show' : ''}>
          {children}
        </ul>
      </div>
    )
  }
}

export default TreeNode
