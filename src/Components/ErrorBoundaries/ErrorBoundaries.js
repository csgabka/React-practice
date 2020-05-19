import React, { Component } from 'react';

class ErrorBoundaries extends Component {

	state = {
		hasError: false,
		errorMessage: ''
	}

	componentDidCatch = (error, info) => {
		this.setState({hasError: true, errorMessage: info})
	}

	render() {
		
			if (this.state.hasError) {
				return <h1>{this.state.error}</h1>
			} else {
				return this.props.children;
			}
	}

}

export default ErrorBoundaries;