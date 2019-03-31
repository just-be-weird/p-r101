import React, { Component } from 'react';
import styles from './_person.module.scss';
import PropTypes from 'prop-types';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';

class Person extends Component {
    constructor(props) {
        super(props);
        //setting up reference in react 16.4 and upper
        this.inputElement = React.createRef();
    }
    //   componentWillMount() {
    //     console.log('Person.js comwillmount');
    //   }
    componentDidMount() {
        if (this.props.position === 0) {
            // this.inputElement.focus();// for react version 16.3 and below
            this.inputElement.current.focus();
        }
    }

    focus() {
        this.inputElement.current.focus();
    }

    render() {
        // console.log('Person.js render');
        return (
            <Aux>
                <p onClick={this.props.click} >Hi I'm {this.props.name}, I'm {this.props.age}</p>
                {this.props.authenticated ? <strong>Login Successfull.</strong> : null}
                <input 
                    type="text" 
                    onChange={this.props.changed}
                    value={this.props.name}
                    // ref={( input )=> { this.inputElement = input }}// for react version 16.3 and below
                    ref={this.inputElement}
                    />
            </Aux>
        );
    }
}
// const person = (porps) => {
//     return (
//         <div className={styles.person}>
//             <p onClick={porps.deleteName} >Hi I'm {porps.name}, I'm {porps.age}</p>
//             <input type="text" onChange={porps.changed} value={porps.name}/>
//         </div>
//     )
// }
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, styles.person);