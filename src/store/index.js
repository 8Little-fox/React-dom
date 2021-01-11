/*
 * @Author: your name
 * @Date: 2021-01-11 14:11:55
 * @LastEditTime: 2021-01-11 16:32:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \React-dom\src\store\reducer.js
 */
import {createStore} from 'redux'
import reducer from './reducer'

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
/**
 * @description:   store 数据存储
 * @param {*}
 * @return {*}
 */
export default store