import React from "react";
import withClass from '../../hoc/withClass';
import Aux from '../../hoc/Aux';
import classes from './_cockpit.module.scss';

const cockpit = (props) => {
    let btnClass = [];
    //Pulling styles from css modules
    const assignedClasses = [classes['Cockpit-title']];
    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }
    // console.log(">>",classes);
    
    props.showPPL ? btnClass = [classes['Cockpit-button'], classes['Red']].join(' ') : btnClass = [classes['Cockpit-button']].join(' ');

    return (
        <Aux>
          <p className={assignedClasses.join(' ')}>Understanding React Syntax</p>
          <button className={btnClass} onClick={props.clicked}>Show People</button>
          <button onClick={props.login}>Login</button>
        </Aux>
    );
}

export default withClass(cockpit, classes['Cockpit-title']);