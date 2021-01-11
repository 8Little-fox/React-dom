/*
 * @Author: your name
 * @Date: 2021-01-09 20:03:18
 * @LastEditTime: 2021-01-11 15:44:06
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
    }
    // 组件更新之前(避免父组件render更新组件中随之更新，降低性能得消耗)
    shouldComponentUpdate(nextProps,nextState){
        console.log(nextProps,nextState);
        if(nextProps.list!==this.props.list){
            return true
        }else{
            return false;
        }
    }
    render(){
        console.log("child render")
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