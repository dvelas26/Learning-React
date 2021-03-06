import React from '../../../../node_modules/react'
import Person from './Person.css'

const person = (props) => {
    return (
    <div className={Person}>
        <p onClick={props.clicked}>I'm {props.name} and I am {props.age} years old</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed}  value={props.name}/>
    </div>
    )
};    

export default person;