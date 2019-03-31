import React, {PureComponent} from 'react';
import Person from './Person/Person';

// const persons = (props) => props.persons.map( (person,index) => (<Person key={person.id}
//     age={person.age}
//     changed={event => props.changed(event, person.id)}
//     deleteName={() => props.clicked(index)}
//     name={person.name}
//     />));
class Persons extends PureComponent {
    constructor(props) {
        super(props);
        //setting up reference in react 16.4 and upper
        this.lastPersonRef = React.createRef();
    }
    //   componentWillMount() {
    //     console.log('Persons.js comwillmount');
    //   }
    componentDidMount() {
        console.log(this.lastPersonRef);
        
        this.lastPersonRef.current.focus();
    } 
    render() {
        // console.log('Persons.js render');
       return this.props.persons.map( (person,index) => (<Person key={person.id}
            age={person.age}
            changed={event => this.props.changed(event, person.id)}
            click={() => this.props.clicked(index)}
            name={person.name}
            position={index}
            ref={this.lastPersonRef}//ref will be for last person as code is in map and on each iteration previous ref will be overriden
            />));
    }
};

export default Persons;