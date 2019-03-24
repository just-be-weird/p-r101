import React, { Component } from 'react';
import Person from './Person/Person';
import classes from './_app.module.scss';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

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
    let btnClass = {};

    if (this.state.showPeople) {
      people = (
        <div>{/** key has to be used on outermost wrapping element and hence errorboundary is provided with key not person component*/}
          { this.state.persons.map( (person,index) => (
            <ErrorBoundary key={person.id}>
              <Person 
                      age={person.age}
                      changed={event => this.nameChangeHandler(event, person.id)}
                      deleteName={() => this.deleteNameHandler(index)}
                      name={person.name}
                      />
          </ErrorBoundary>)) }          
        </div>
      );
      btnClass = classes.Red;
    }
    //Pulling styles from css modules
    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }
    return (
      <div className={classes.App}>
        <p className={assignedClasses.join(' ')}>Understanding React Syntax</p>
        <button className={btnClass} onClick={this.showPeopleHandler}>Show People</button>
        { people }
      </div>
    );
  }
}

export default App;
