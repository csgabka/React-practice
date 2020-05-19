import React from 'react';
import Person from './Person/Person';

const People = (props) => props.persons.map((person, index) => {
 return <Person key={person.id}
 name={person.name}
 age={person.age}
 click={props.deletePerson.bind(this, index)}
 changed={(event) => props.nameChangedHandler(event, person.id)}/>
});

export default People;
