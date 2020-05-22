import React, {Component} from 'react';

import classes from './Person.module.css';

class Person extends Component {

	// const random = Math.random();
	// if (random > 0.9) {
	// 	throw new Error('Ooops...something went wrong');
	// }
	//error handling example




  render() {
    return (
        <div className={classes.Person}>
            <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
            <p>{this.props.children}</p>
            <input className={classes.input} type="text" onChange={this.props.changed} value={this.props.name} />
        </div>
    )
  };
}


export default Person;
