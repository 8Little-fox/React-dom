/*
 * @Author: your name
 * @Date: 2021-01-09 14:56:29
 * @LastEditTime: 2021-01-11 16:31:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-base\src\todoList\index.js
 */
import React, { Component, Fragment } from 'react';
import { Button, Input } from 'antd';
// import axios from 'axios'
import store from '../store'
import {getAddTodoListAction,getTodoListAction,getDelTodoListAction} from '../store/actionCreators'
import './index.css';
import TodoItem from './components/todoItem'
class todoList extends Component {
    constructor(props) {
        super(props)
        /**
        * @description: 
        * getState() 获取store 的数据
        *  subscribe()  监听store变化的函数             
        * @param {*}
        * @return {*}
        */
        this.state = store.getState()
        this.handlState = this.handlState.bind(this)
        store.subscribe(this.handlState)
        console.log("store", this.state)
        this.handlChange = this.handlChange.bind(this) // 搜索事件
        this.handlDel = this.handlDel.bind(this)     // 删除
        this.handlAdd = this.handlAdd.bind(this)   // 新增列表
    }
    // 新增列表
    handlAdd() {
       const action =getAddTodoListAction()
        store.dispatch(action)
    }
    // 搜索事件
    handlChange(e) {
        const action = getTodoListAction(e.target.value)
        store.dispatch(action)
    }
    // 删除
    handlDel(index) {
        const action = getDelTodoListAction(index)
        store.dispatch(action)
    }
    handlState() {
      this.setState(()=>(this.state = store.getState()))
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