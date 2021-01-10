/*
 * @Author: your name
 * @Date: 2021-01-09 20:03:18
 * @LastEditTime: 2021-01-10 15:53:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-base\src\todoList\todoItem.js
 */
import React, { Component, Fragment } from 'react';
import { Button,List, Typography, Divider } from 'antd';
import PropTypes from 'prop-types';
import '../index.css'
class TodoItem extends Component {
    constructor(props){
        super(props)
    //   this.deleteItem=this.deleteItem.bind(this)
    }
    //删除
    deleteItem(index){
        console.log(index)
        this.props.deleteItem(index)
    }
    render(){
        return(
            <Fragment>
                  <Divider orientation="left">Default Size</Divider>
                    <List
                        bordered
                        dataSource={this.props.list}
                        renderItem={(item,index) => (
                            <List.Item>
                                <div className="todoList">
                                    <Typography.Text mark>[ITEM]</Typography.Text>
                                    <div>{item}</div>
                                    <Button type="dashed" danger className="de_but" onClick={this.props.deleteItem.bind(this,index)}>Delete</Button>
                                </div>

                            </List.Item>
                        )}
                    />
            </Fragment>
        )
    }
}
// 检测传值类型
TodoItem.propTypes = {
    list: PropTypes.array
  };
// // 传值给默认值
// TodoItem.defaultProps={
//     test:'Hello World'
// }
export default TodoItem;