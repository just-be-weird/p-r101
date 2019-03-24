import React from 'react';
import './Person.css';
const person = (porps) => {
    return (
        <div className='person'>
            <p onClick={porps.deleteName} >Hi I'm {porps.name}, I'm {porps.age}</p>
            <input type="text" onChange={porps.changed} value={porps.name}/>
        </div>
    )
}

export default person;