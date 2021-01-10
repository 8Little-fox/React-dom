/*
 * @Author: your name
 * @Date: 2021-01-09 14:56:29
 * @LastEditTime: 2021-01-10 14:43:31
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
        this.handlChange=this.handlChange.bind(this) // 搜索事件
        this.handlDel=this.handlDel.bind(this)     // 删除
        this.handlAdd=this.handlAdd.bind(this)   // 新增列表
    }
    // 新增列表
    handlAdd() {
        // prevState 改变之前的数据相当与this.state
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.content],
            content: ''
        }))
    }
    // 搜索事件
    handlChange(e) {
        // 外部对值进行保存
        const value = e.target.value
        // 异步
        this.setState(() => ({ content: value }))

    }
    // 删除
    handlDel(index) {
        this.setState((prevState) => {
            let list = [...prevState.list]
            list.splice(index, 1)
            return { list }
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
                    onChange={this.handlChange}
                />
                <Button type="primary" onClick={this.handlAdd}>Add</Button>
                <TodoItem list={this.state.list} deleteItem={this.handlDel} />

            </Fragment>
        );
    }
}

export default todoList;