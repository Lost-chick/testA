/*
 * @Author: your name
 * @Date: 2020-02-18 17:32:48
 * @LastEditTime: 2020-02-18 22:36:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \testA\src\components\Tree\index.js
 */
import React, { Component } from 'react';
import TreeNode from '../TreeNode';
import Modal from '../Modal';
import './index.less';

class Tree extends Component {
  constructor() {
    super();
    this.state = {
      treeData: [
        {
          id: 1,
          pid: 0,
          name: '一级菜单'
        },
        {
          id: 2,
          pid: 1,
          name: '二级菜单'
        },
        {
          id: 3,
          pid: 1,
          name: '二级菜单'
        },
        {
          id: 4,
          pid: 2,
          name: '三级菜单'
        },
        {
          id: 5,
          pid: 3,
          name: '三级菜单'
        },
        {
          id: 6,
          pid: 3,
          name: '三级菜单'
        },
        {
          id: 7,
          pid: 0,
          name: '一级菜单'
        },
      ],
      diaLogVisible: false,
      value: '',
      id: '',
      index: 0
    };
  }
  componentDidMount() {
    // console.log(this.getParent(3))
    // this.createNode(0);

  }
  // 获取子级
  getChild = (id) => {
    const { treeData } = this.state;
    const newDate = []
    treeData.forEach(item => {
      if (item.pid === id) {
        newDate.push(item)
      };
    })
    return newDate;
  }
  // 本id获取父级id
  getParent = (id) => {
    const { treeData } = this.state;
    let parentId = '';
    treeData.forEach(item => {
      if (item.id === id) {
        parentId = item.pid
      };
    });
    return parentId
  }

  // 打开弹框
  showDialog = (id) => {
    this.setState({ diaLogVisible: true, id })
  }
  // 添加子元素
  addChild = (pid) => {
    const { treeData, value } = this.state;
    treeData.push({
      name: value,
      id: new Date().getTime(),
      pid: pid
    })
    this.setState({ treeData, diaLogVisible: false, value: '', id: '' })
  }
  // 上移
  moveUp = (id) => {
    console.log(id)
  }
  // 下移
  moveDown = (id) => {
    console.log(id)
  }
  // 删除
  deleteItem = (id) => {
    const { treeData } = this.state;
    const data = treeData.filter(item => item.id !== id);
    this.setState({ treeData: data })
  }

  createNode = (pid) => {
    const nodeLength = this.getChild(pid).length;
    // 父亲或者爷爷的id不为0时，为三级以下
    const isThree = this.getParent(pid) || this.getParent(this.getParent(pid));
    return <React.Fragment>
      {
        this.getChild(pid).map((item, index) => {
          // 是否有子级
          const hasChild = this.getChild(item.id).length;
          const { id, pid, name } = item;
          return (
            <TreeNode
              index={index}
              key={id}
              id={id}
              pid={pid}
              isThree={isThree}
              name={name}
              hasChild={hasChild}
              bortherLen={nodeLength}
              addChild={() => {
                this.showDialog(id)
              }}
              moveUp={() => {
                this.moveUp(id)
              }}
              moveDown={() => {
                this.moveDown(id)
              }}
              deleteItem={() => {
                this.deleteItem(id)
              }}
            >
              {
                hasChild ? this.createNode(id) : null
              }
            </TreeNode>
          )
        })
      }
    </React.Fragment>
  }
  render() {
    const { diaLogVisible, value, id } = this.state;
    return (
      <div className="tree-container">
        {this.createNode(0)}
        <Modal
          visible={diaLogVisible}
          title='编辑名称'
          confirm={() => {
            this.addChild(id)
          }}
          onClose={this.hiddenDialog}
        >
          <input type="text" placeholder="请输入内容" value={value} onChange={(e) => {
            this.setState({ value: e.target.value })
          }} />
        </Modal>
      </div>
    )
  }
}

export default Tree
