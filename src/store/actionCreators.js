/*
 * @Author: your name
 * @Date: 2021-01-11 15:57:41
 * @LastEditTime: 2021-01-11 16:11:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \React-dom\src\store\actionCreators.js
 */
import { TODOLIST, ADDTODOLIST, DElTODOLIST } from './actionTypes'
export const getAddTodoListAction = () => ({
    type: ADDTODOLIST
})
export const getTodoListAction = (value) => ({
    type: TODOLIST,
    value
})
export const getDelTodoListAction = (index) => ({
    type: DElTODOLIST,
    index
})