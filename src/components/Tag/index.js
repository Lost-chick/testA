/*
 * @Author: your name
 * @Date: 2020-02-08 15:22:01
 * @LastEditTime : 2020-02-08 16:36:54
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \component\src\components\Tag\index.js
 */
import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './index.module.less'

/**
 * @description: 标签组件
 * @param {closeable} boolean 是否关闭 
 * @param {onClose} func 变迁关闭的回调 
 * @param {color} string 标签颜色 
 */
function Tag (props) {
  const { children, closeable, onClose, color } = props;
  const tag = React.createRef();
  console.log(styles.colseBtn)
  const handleClose = () => {
    onClose && onClose();
    console.log(tag.current)
    tag.current.style.dispaly = 'none'
  }

  return (
    <div
      className={classnames(styles.xTag, color ? styles.xTagHasColor : '')} 
      style={{backgroundColor: color}}
      ref={tag}
    >
      {children}
      {closeable && <span className={styles.colseBtn} onClick={handleClose}>x</span>   }
    </div>
  )
}
Tag.prototype = {
  color: PropTypes.string,
  closeable: PropTypes.bool,
  onClose: PropTypes
}

export default Tag
