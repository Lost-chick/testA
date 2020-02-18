/*
 * @Author: your name
 * @Date: 2020-02-08 16:00:57
 * @LastEditTime : 2020-02-08 16:05:36
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \component\src\components\Empty\index.js
 */
import React from 'react';
import classnames from 'classnames';
import styles from './index.less';

/**
 * @description: 
 * @param {className} string 一定义类名 
 */
function Empty (props) {
  const { text, className } = props;
  return (
    <div
      className={classnames(styles.emptyWrap, className)}
    >
      <div className={styles.emptyInner}>
        <span className="icon-finder"></span>
      </div>
      <p>
        {text ? text : '空空如也'}
      </p>

    </div>
  )
}
export default Empty;