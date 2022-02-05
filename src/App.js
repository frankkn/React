import React, { Component } from 'react';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';
import './App.css';



export default class App extends Component{

  state = {todos:[
    {id:'001',name:'吃飯',done:true},
    {id:'002',name:'睡覺',done:true},
    {id:'003',name:'打code',done:false},
    {id:'004',name:'逛街',done:false}
  ]}

  render(){
    const {todos} = this.state
    return(
      <div id="root">
        <div className="todo-container">
          <div className="todo-wrap">
            <Header/>
            <List todos={todos}/>
            <Footer/>
          </div>
        </div>
      </div>
    )
  }
}
