import React from 'react';
import './Person.css';

const Person = (props) => {
	return (
		<div className="Person">
			<h1 onClick={props.click}>{props.name}{props.children}</h1>
			<input type="text" onChange={props.change} value={props.name}/>
		</div>

		);
}

export default Person;