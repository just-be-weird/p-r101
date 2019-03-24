import React from 'react';
import styles from './_person.module.scss';
const person = (porps) => {
    return (
        <div className={styles.person}>
            <p onClick={porps.deleteName} >Hi I'm {porps.name}, I'm {porps.age}</p>
            <input type="text" onChange={porps.changed} value={porps.name}/>
        </div>
    )
}

export default person;