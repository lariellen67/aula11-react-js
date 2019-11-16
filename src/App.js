import React from 'react';
import './App.css';
import Screen from './Screen';
import Principal from './Principal';
import Aside from './Aside';

export default class App extends React.Component{
  render(){
    return(
      <div>
        <Screen></Screen>
        <Principal></Principal>
        <Aside></Aside>
      </div>
    )
  }

}
