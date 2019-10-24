import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import classes from './App.module.css';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
      persons: [
        {id:'a1', name: 'Max', age: 28},
        {id: 'a2', name: 'Manu', age: 29},
        {id: 'a3', name: 'Stephanie', age: 27}
      ],
      otherState: 'some other value'
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1)
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id; 
    });

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
  }


  render() {
    let persons = null;
    if(this.state.showPersons) {
      persons = (
           <Persons 
              persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.nameChangedHandler} 
           />
      );
    }
    return (
        <div className={classes.App}>
          <Cockpit 
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            click={this.togglePersonHandler}
          />
          {persons}
        </div>
    );
  }
}

export default App;
