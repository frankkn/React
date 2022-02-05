import React, { Component } from 'react';
import './index.css';

export default class Header extends Component {
  render() {
    return(
      <div className="todo-header">
        <input type="text" placeholder="請輸入代辦事項，按Enter確認。"/>
      </div>
    ) 
  }
}
