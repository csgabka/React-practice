import React from 'react';
import './CharComponents.css';

const CharComponents = (props) => {
	return (
		<div className="charComponents" onClick={props.clicked}>
		{props.character}
		</div>
		);
}

export default CharComponents;