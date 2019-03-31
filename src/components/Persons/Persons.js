import React, {Component} from 'react';
import Person from './Person/Person';

// const persons = (props) => props.persons.map( (person,index) => (<Person key={person.id}
//     age={person.age}
//     changed={event => props.changed(event, person.id)}
//     deleteName={() => props.clicked(index)}
//     name={person.name}
//     />));
class Persons extends Component {
    constructor(props) {
        super(props);
        console.log('Persons.js constructor',props);
      }
      componentWillMount() {
        console.log('Persons.js comwillmount');
      }
      componentDidMount() {
        console.log('Persons.js comdidmount');
    } 
    render() {
        console.log('Persons.js render');
       return this.props.persons.map( (person,index) => (<Person key={person.id}
            age={person.age}
            changed={event => this.props.changed(event, person.id)}
            click={() => this.props.clicked(index)}
            name={person.name}
            />));
    }
};

export default Persons;