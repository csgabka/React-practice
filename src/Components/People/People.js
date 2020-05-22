import React, {PureComponent} from 'react';
import Person from './Person/Person';

class People extends PureComponent {
  /*static getDerivedStateFromProps(props, state) {
    console.log('Person.js: getDerivedStateFromProps', props);
    return state;
  }*/


//for optimising the component. only renders if that single prop changes!
//if you want to check all props use PureComponent instead of shouldComponentUpdate
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('Person.js: shouldComponentUpdate');
  //   if (nextProps.persons !== this.props.persons) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Person.js: getSnapShotBeforeUpdate', prevProps, prevState);
    return null;
  }

  componentDidUpdate() {
    console.log('Person.js: componentDidUpdate');
  }

  render() {
    return this.props.persons.map((person, index) => {
     return <Person key={person.id}
     name={person.name}
     age={person.age}
     click={this.props.deletePerson.bind(this, index)}
     changed={(event) => this.props.nameChangedHandler(event, person.id)}/>
    });

  }
}


export default People;
