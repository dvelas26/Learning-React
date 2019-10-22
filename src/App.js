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

  switchNameHandler = () =>  {
    this.setState({persons: [
      {name: 'Maximilian', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 27}
    ]})
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
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px'
    }
    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <button style={style} onClick={this.togglePersonHandler}>Switch Name</button>
        {this.state.showPersons === true ?
          <div>
            <Person 
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}/>
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Max!!')}  
              changed={this.nameChangedHandler}
            > My Hobbies: Racing </Person>
            <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age}/>
          </div> : null
        }
      </div>
    );
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hi, I\'m a react app'));
  }
}

export default App;
