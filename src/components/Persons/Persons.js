import React from 'react';
import Person from './Person/Person'

const persons = (props) => props.persons.map((person, index) => {
  return   <Person 
              clicked={() => props.clicked( index )}
              name={person.name}
              age={person.age}
              changed={(event) => props.changed(event, person.id)}
              key={person.id}
            />
});

export default persons;