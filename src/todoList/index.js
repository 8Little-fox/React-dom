/*
 * @Author: your name
 * @Date: 2021-01-09 14:56:29
 * @LastEditTime: 2021-01-09 20:29:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-base\src\todoList\index.js
 */
import React, { Component, Fragment } from 'react';
import { Button, Input, List, Typography, Divider } from 'antd';
import './index.css';
import TodoItem from './components/todoItem'
class todoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: '',
            list: []
        }
    }
    // 新增列表
    handlAdd() {
        this.setState({
            list: [...this.state.list, this.state.content],
            content: ''
        })
    }
    // 搜索事件
    handlChange(e) {
        this.setState({
            content: e.target.value
        })
    }
    // 删除
    handlDel(index){
        let list=[...this.state.list]
        list.splice(index,1)
        this.setState({
            list:list
        })
    }
    render() {
        return (
            <Fragment>
                <Input
                    placeholder="input search text"
                    allowClear
                    style={{ width: 300, margin: '20px' }}
                    value={this.state.content}
                    onChange={this.handlChange.bind(this)}
                />
                <Button type="primary" onClick={this.handlAdd.bind(this)}>Add</Button>
                <TodoItem list={this.state.list} deleteItem={this.handlDel.bind(this)}/>
              
            </Fragment>
        );
    }
}

export default todoList;