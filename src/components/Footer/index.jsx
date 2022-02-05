import React, { Component } from 'react';
import './index.css';

export default class Footer extends Component {

  handleCheckAllTodo = (event)=>{ 
    this.props.checkAllTodo(event.target.checked)
  }

  handleClearAllDone = ()=>{
    this.props.clearAllDone()
  }

  render() {
    const {todos} = this.props
    const doneCount = todos.reduce((pre,todo)=>{
      return pre + (todo.done?1:0)
    },0)
    const totalCount = todos.length
    return(
      <div className="todo-footer">
        <label>
          <input onChange={this.handleCheckAllTodo} type="checkbox" checked={doneCount === totalCount && totalCount !== 0 ? true : false}/>
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{totalCount}
        </span>
        <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成事項</button>
      </div>
    ) 
  }
}