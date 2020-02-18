/*
 * @Author: your name
 * @Date: 2020-02-09 13:07:25
 * @LastEditTime : 2020-02-09 17:42:09
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Editodal
 * @FilePath: \component\src\components\Madal\index.js
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import NewPortal from '../NewPortal'
import './index.less';

class Modal extends Component {
  constructor(props) {
    super(props)
    this.confirm = this.confirm.bind(this);
    this.maskClick = this.maskClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
      visible: false
    }
  }

  // 首次渲染使用父级组件的状态更新modal的visible状态，值更新一次
  componentDidMount() {
    this.setState({ visible: this.props.visible })
  }

  // 每次接受props就根据组组件的状态更新modal的状态，首次渲染不调用
  componentWillReceiveProps(props) {
    this.setState({ visible: props.visible })
  }

  // 点击取消更新visible
  closeModal() {
    console.log('取消按钮');
    const { onClose } = this.props;
    onClose && onClose();
    this.setState({ visible: false })
  }
  confirm() {
    console.log('确认按钮');
    const { confirm } = this.props;
    confirm && confirm();
    this.setState({ visible: false })
  }
  maskClick() {
    console.log('遮罩层关闭')
    this.setState({ visible: false })
  }

  render() {
    const { visible } = this.state;
    const { title, children } = this.props;
    return <NewPortal visible={visible}>
      <div className="modal-wrapper">
        <div className="modal">
          <div className="modal-title">{title}</div>
          <div className="modal-content">{children}</div>
          <div className="modal-operator">
            <button
              className="modal-operator-close"
              onClick={this.closeModal}
            >取消
            </button>
            <button
              className="modal-operator-confirm"
              onClick={this.confirm}
            >确认
            </button>
          </div>
        </div>
        <div
          className="mask"
          // onClick={this.maskClick}
        ></div>
      </div>
    </NewPortal>

  }
}


function create(config) {
  const div = document.createElement('div');
  document.body.appendChild(div);

  function destroy() {
    // 销毁指定容器内的所有React节点
    const unmountResult = ReactDOM.unmountComponentAtNode(div);
    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
      console.log('卸载')
    }
  }

  function close() {
    destroy();
    if (config.closeCallback) {
      config.closeCallback();
    }
  }
  
  function confirm() {
    destroy();
    if (config.successCallback) {
      console.log(config)
      config.successCallback();
    }
  }

  function render(props) {
    ReactDOM.render(<Modal {...props} />, div);
  }

  render({
    ...config, visible: true, successCallback: confirm, closeCallback: close
  });

  return {
    destroy,
  };
}
Modal.create = create;

Modal.show = (config) => {
  return Modal.create(config);
};

export default Modal
