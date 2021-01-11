/*
 * @Author: your name
 * @Date: 2021-01-11 14:11:55
 * @LastEditTime: 2021-01-11 15:56:06
 * @LastEditors: Please set LastEditors
 * @Description: defaultState定义一个默认数据
 * @FilePath: \React-dom\src\store\reducer.js
 */
import { TODOLIST, ADDTODOLIST, DElTODOLIST } from './actionTypes'
const defaultState = {
    content: 'Sll',
    list: ['111', '222']
}
export default (state = defaultState, action) => {
    console.log(action)
    if (action.type === TODOLIST) {
        const new_state = JSON.parse(JSON.stringify(state))  //复制一份state 数据
        //老数据替换成新数据
        new_state.content = action.value
        return new_state
    }

    if (action.type === ADDTODOLIST) {
        const new_state = JSON.parse(JSON.stringify(state))  //复制一份state 数据
        //老数据替换成新数据
        new_state.list.push(new_state.content)
        new_state.content = ''
        return new_state
    }
    if (action.type === DElTODOLIST) {
        const new_state = JSON.parse(JSON.stringify(state))  //复制一份state 数据
        //老数据替换成新数据
        new_state.list.splice(action.index,1)
        console.log(action)
        return new_state
    }
    return state
}