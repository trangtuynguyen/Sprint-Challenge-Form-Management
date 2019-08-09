import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./form"


class App extends React.Component{
  constructor(){
    super();
    this.state ={
      infoArray: [],
      status: false,
    }
  }

  render(){
    return(<Form/>)
  }
}


export default App;
