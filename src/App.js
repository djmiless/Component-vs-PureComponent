import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import PureComp from "./components/PureComp";
import ParentComp from "./components/ParentComp";

class App extends React.Component{

  render(){
    return(
      <div className="App">
      <ParentComp />
      </div>
    )
  }
}

export default App;