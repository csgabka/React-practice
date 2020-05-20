import React from 'react';
import classes from './Cockpit.module.css';

const Cockpit = (props) => {

  let classNames = [];
  let btnClass = '';

  if (props.persons.length <= 2) {
  	classNames.push(classes.red);
  }

  if (props.persons.length <= 1) {
  	classNames.push(classes.bold);
  }

  if (props.showPersons) {
    btnClass = classes.Green;
  }


  return (
    <div className={classes.App}>
    <h1>Basics of react</h1>
    <p className={classNames.join(' ')}>It really works!</p>

    <button className={btnClass}
      onClick={props.togglePersonsHandler}>Toggle Persons</button>

    <br />
    </div>
  );
}

export default Cockpit;
