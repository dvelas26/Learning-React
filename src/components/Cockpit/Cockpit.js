import React from 'react'
import styles from './Cockpit.module.css'


const cockpit = (props) => {
  let assignedClasses  = [];
  let btnClass = '';
  btnClass = styles.red;
  if(props.showPersons) {
    btnClass = styles.Red;
  }
  if(props.persons.length <= 2) {
    assignedClasses.push( styles.red);
  }

  if(props.persons.length <= 1) {
    assignedClasses.push( styles.bold );
  }
  return (
  <div className={styles.Cockpit}>
    <h1>Hi, I'm a react app</h1>
    <p className={assignedClasses.join(' ')}>This is really working</p>
    <button style={btnClass} onClick={props.click}>Toggle Persons</button>
  </div>);
};

export default cockpit;