import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
      persons: [
          {name: 'Max', age: 28},
          {name: 'Manu', age: 29},
          {name: 'Stephanie', age: 26}
      ],
      otherState: 'some other value'
  }
  
  nameChangedHandler = (event) =>  {
    this.setState({persons: [
      {name: 'Max', age: 28},
      {name: event.target.value, age: 29},
      {name: 'Stephanie', age: 27}
    ],
     showPersons: false
  })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = () => {

  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px'
    }
    let persons = null;
    if(this.state.showPersons) {
      persons = (
        this.state.persons.map(person => {
          return  <Person 
                    name={person.name}
                    age={person.age}
                  />
        })
    )}

    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <button style={style} onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hi, I\'m a react app'));
  }
}

export default App;
