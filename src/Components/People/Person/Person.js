import React, {Fragment, Component} from 'react';
import PropTypes from 'prop-types';

import classes from './Person.module.css';
import withClasss from '../.././hoc/withClasss';
import Auxilliary from '../.././hoc/Auxilliary';
import AuthContext from '../../context/auth-context';

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  static contextType = AuthContext;

	// const random = Math.random();
	// if (random > 0.9) {
	// 	throw new Error('Ooops...something went wrong');
	// }
	//error handling example
  componentDidMount() {
    this.inputRef.current.focus();
    console.log(this.context.authenticated);
  }

  render() {
    return (
      /*if only creating wrapper div to wrap component, 1. option use own Auxilliary*/

      // <Fragment>
      // 2. option React's own wrapper which does the same as your Aux.
      <Auxilliary>
            <p className={classes.deletable} onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
            <p>{this.props.children}</p>
            <input ref={this.inputRef} className={classes.input} type="text" onChange={this.props.changed} value={this.props.name} />
            {this.context.authenticated ? <p>You have logged in!</p> :
              <p>Please login!</p>}
      </Auxilliary>
      // </Fragment>
    // </div>
    )
  };
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func

}




export default withClasss(Person, classes.Person);
