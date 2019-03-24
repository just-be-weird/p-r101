import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { id: 'ashdkk' ,name: 'Jan', age: 20},
      {id: 'aeiwjej', name: 'April', age: 24},
      {id: 'yinkkej', name: 'June', age: 14}
    ],
    showPeople: false
  }

  nameChangeHandler = (event, id)=> {
    const personIndex = this.state.persons.findIndex( persn => persn.id === id );//find persons index
    const person = {...this.state.persons[personIndex]};//get safly the targeted person
    // const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;//change respected value
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  showPeopleHandler = () => {
    this.setState({ showPeople: !this.state.showPeople });
  }
  
  deleteNameHandler = (index) => {
    // const persons = this.state.persons;// here we are mutating the original data source which is not a best practice, instead use below method
    // const persons = this.state.persons.slice();//will copy safly to persons or better use below
    const persons = [...this.state.persons];
    persons.splice(index, 1);//delete
    this.setState({ persons: persons });
  }

  render() {
    //best practice to show jsx conditionally 
    let people = null;
    //inline-style
    const inline_style = {
      backgroundColor: '#8bc34a',
      color: 'white',
      font: 'inherit',
      border: '1px solid #9e9e9e',
      padding: '8px',
      cursor: 'pointer'
    };
    if (this.state.showPeople) {
      inline_style.backgroundColor = '#f44336';
      people = (
        <div>
          { this.state.persons.map( (person,index) => (<Person key={person.id}
                                                              age={person.age}
                                                              changed={event => this.nameChangeHandler(event, person.id)}
                                                              deleteName={() => this.deleteNameHandler(index)}
                                                              name={person.name}
                                                              />)) }          
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Understanding React Syntax</h1>
        <button style={inline_style} onClick={this.showPeopleHandler}>Show People</button>
        { people }
      </div>
    );
  }
}

export default App;
