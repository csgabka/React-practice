import React, {useEffect, useRef, useContext} from 'react';
import classes from './Cockpit.module.css';

const Cockpit = (props) => {
  //const clickRef = useRef(null);
  //useEffect combines componentdidmount and componentdidupdate


  useEffect(() => {
    console.log('Cockpit.js useEffect');
    //clickRef.current.click();
    return () => {
      console.log('Cockpit.js cleanupwork in useEffect');
    }
  }, []); //1. useEffect with second argument [] runs as ComponentDidMount - only runs once
  //2. useEffect with second argument [props.persons] - only runs when props.persons get changed

  useEffect(()=> {
    console.log('Cockpit.js 2nd useEffect');
    return () => {
      console.log('Cockpit.js cleanupwork 2nd useEffect');
    }
  }); //3. NO SECOND ARGUMENT so it will run with every update cycle

  let classNames = [];
  let btnClass = '';

  if (props.personsLength <= 2) {
  	classNames.push(classes.red);
  }

  if (props.personsLength <= 1) {
  	classNames.push(classes.bold);
  }

  if (props.showPersons) {
    btnClass = classes.Green;
  }


  return (
    <div className={classes.App}>
    <h1>Basics of react</h1>
    <p className={classNames.join(' ')}>It really works!</p>

    <button /*ref={clickRef}*/ className={btnClass}
      onClick={props.togglePersonsHandler}>Toggle Persons</button>

    <br />
    </div>
  );
}

export default React.memo(Cockpit);
//for optimizing functional component - wrap in React.memo. this way only what
//changes going to get rendered again
