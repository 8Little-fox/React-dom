/*
 * @Author: your name
 * @Date: 2021-01-09 20:03:18
 * @LastEditTime: 2021-01-10 13:59:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-base\src\todoList\todoItem.js
 */
import React, { Component, Fragment } from 'react';
import { Button,List, Typography, Divider } from 'antd';
import '../index.css'
class todoItem extends Component {
    constructor(props){
        super(props)
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

export default todoItem;