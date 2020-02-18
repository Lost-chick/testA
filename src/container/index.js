/*
 * @Author: your name
 * @Date: 2020-02-18 15:45:45
 * @LastEditTime: 2020-02-18 16:58:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \testA\src\container\Tree.js
 */
import React, { Component } from 'react';
import Modal from '../components/Modal';
import Tree from '../components/Tree'

class Index extends Component {
  constructor(props) {
    super(props);
    this.confirm = this.confirm.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.showModal = this.showModal.bind(this);
    this.show = this.show.bind(this);
    this.state = {
      visible: false
    }
  }
  showModal() {
    Modal.show({
      title:'方法吊起',
      children:'方法掉漆',
      successCallback:()=>{
        console.log('2222')
      }
    })
  }
  show() {
    console.log('btn')
    this.setState({ visible: true })
  }
  closeModal() {
    console.log('我是close的回调')
  }
  confirm() {
    console.log('我是confirm的回调')
  }

  render() {
    const { visible } = this.state;
    return (
      <div className="app">
        <Tree/>
        <Modal 
          visible={visible}
          title='编辑名称'
          confirm={this.confirm}
          onClose={this.closeModal}
        >
          <input type="text" placeholder="请输入内容"/>
        </Modal>
      </div>
    )
  }

}

export default Index;
