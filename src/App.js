import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import Radium, { StyleRoot } from 'radium'
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
    const style = {
      backgroundColor: 'green',
      color: 'whtie',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer',':hover' :{backgroundColor: 'lightgreen', text: 'black'}
    }
    let persons = null;
    if(this.state.showPersons) {
      persons = (
        this.state.persons.map((person, index) => {
          return  <Person 
                    name={person.name}
                    age={person.age}
                    delete={() => this.deletePersonHandler(index)}
                    key={person.id}
                    changed={(event) => this.nameChangedHandler(event, person.id)}
                  />
        })
      )
      style.backgroundColor = 'red';
      style[':hover'] = {backgroundColor: 'salmon', text: 'black'};
    }
    const classes  = [];
    if(this.state.persons.length <= 2) {
      classes.push('red');
    }

    if(this.state.persons.length <= 1) {
      classes.push('bold');
    }


    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a react app</h1>
          <p className={classes.join(' ')}>This is really working</p>
          <button style={style} onClick={this.togglePersonHandler}>Toggle Persons</button>
          {persons}
        </div>
      </StyleRoot>

    );
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hi, I\'m a react app'));
  }
}

export default Radium(App);
