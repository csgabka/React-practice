import React from 'react';

const ValidationComp = (props) => {
	let message = (<p>It is too short mate!</p>);
	if (props.userInput.length > 5) {
		message = (<p>Allllll righty!</p>);
	}

	return (
		<div>
		{message}
		</div>
		);


	
}

export default ValidationComp;