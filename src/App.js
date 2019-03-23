import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    person: [
      {name: 'Jan', age: 20},
      {name: 'April', age: 24}
    ]
  }

  switchNameHandler = ()=> {
    this.setState({
      person: [
        {name: 'June' , age: 24},
        {name: 'April', age: 26}
      ]
    })
  }

  nameChangeHandler = (event)=> {
    this.setState({
      person: [
        {name: 'June' , age: 24},
        {name: event.target.value , age: 26}
      ]
    })
  }
  

  render() {
    return (
      <div className="App">
        <h1>Understanding React Syntax</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.person[0].name} switchNameHandler={this.switchNameHandler} age={this.state.person[0].age}> children properties </Person>
        <Person  name={this.state.person[1].name} changed={this.nameChangeHandler} age={this.state.person[1].age}/>
      </div>
    );
  }
}

export default App;
