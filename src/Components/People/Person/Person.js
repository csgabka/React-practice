import React from 'react';

import classes from './Person.module.css';

const person = ( props ) => {

	// const random = Math.random();
	// if (random > 0.9) {
	// 	throw new Error('Ooops...something went wrong');
	// }
	//error handling sample

    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input className={classes.input} type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default person;
