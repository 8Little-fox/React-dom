/*
 * @Author: your name
 * @Date: 2021-01-09 12:48:16
 * @LastEditTime: 2021-01-09 15:02:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ReactDemo\react-base\src\App.js
 */

import React from 'react';
import TodoList from './todoList/index'
class App extends React.Component {
  
    render() { 
        return ( 
           <div>
               <TodoList></TodoList>
           </div>
         );
    }
}
 
export default App;
