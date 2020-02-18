/*
 * @Author: your name
 * @Date: 2020-02-08 15:12:36
 * @LastEditTime : 2020-02-09 17:37:51
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \component\src\App.js
 */
import React, { Component } from 'react';
// import Tag from './components/Tag'
// import Empty from './components/Empty'
import Modal from './components/Modal'

class App extends Component {
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
    // console.log('btn')
    // this.setState({ visible: true })
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
        <button onClick={this.showModal}>click here</button>
        <button onClick={this.show}>click here</button>
        <Modal 
          visible={visible}
          title='这里是自定义title'
          confirm={this.confirm}
          onClose={this.closeModal}
        >
          这里是自定义content
        </Modal>
      </div>
    )
  }

}

export default App;
