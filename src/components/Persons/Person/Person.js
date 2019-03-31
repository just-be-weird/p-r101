import React, {PureComponent} from 'react';
import styles from './_person.module.scss';
class Person extends PureComponent {
    constructor(props) {
        super(props);
        console.log('Person.js constructor',props);
      }
      componentWillMount() {
        console.log('Person.js comwillmount');
      }
      componentDidMount() {
        console.log('Person.js comdidmount');
    } 
    render() {
        console.log('Person.js render');
        return (
            <div className={styles.person}>
                <p onClick={this.props.click} >Hi I'm {this.props.name}, I'm {this.props.age}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>
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

export default Person;