import React, { PureComponent } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

//creating Global context using reat.createContext
export const AuthContext = React.createContext(false);

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { id: 'ashdkk' ,name: 'Jan', age: 20},
        {id: 'aeiwjej', name: 'April', age: 24},
        {id: 'yinkkej', name: 'June', age: 14}
      ],
      showPeople: false,
      clickCounter: 0,
      authenticated: false
    }
    // console.log('constructor',props);
  }
  // componentWillMount() {
  //   console.log('App.js comwillmount');
  // }
  // componentDidMount() {
  //   console.log('App.js comdidmount');
  // }

  

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
    //using setState correctly if we are using previous states value to set new value for state
    // this.setState({ showPeople: !this.state.showPeople });
    this.setState((prevState, props) => {
      return {
        showPeople: !this.state.showPeople,
        clickCounter: prevState.clickCounter+1
      }
    })
  }
  
  deleteNameHandler = (index) => {
    // const persons = this.state.persons;// here we are mutating the original data source which is not a best practice, instead use below method
    // const persons = this.state.persons.slice();//will copy safly to persons or better use below
    const persons = [...this.state.persons];
    persons.splice(index, 1);//delete
    this.setState({ persons: persons });
  }

  loginHandler = () => {
    this.setState(()=> ({authenticated: true}));
  }

  render() {
    // console.log('render app')
    //best practice to show jsx conditionally 
    let people = null;

    if (this.state.showPeople) {
      people = <Persons 
                  persons={this.state.persons}
                  clicked={this.deleteNameHandler}
                  changed={this.nameChangeHandler}
                  // isAuthenticated={this.state.authenticated}
                />
    }
    
    return (
      <div>
        <Cockpit 
          showPPL={this.state.showPeople}
          persons={this.state.persons}
          clicked={this.showPeopleHandler}
          login={this.loginHandler}
        />
        <AuthContext.Provider value={this.state.authenticated}>
          { people }
        </AuthContext.Provider>
      </div>
    );
  }
}

export default App;
