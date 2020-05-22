import React, { Component } from 'react';
import classes from './App.module.css';
import People from '../Components/People/People';
import ValidationComp from '../Components/ValidationComp/ValidationComp';
import CharComponents from '../Components/CharComponents/CharComponents';
import Cockpit from '../Components/Cockpit/Cockpit';
import Auxilliary from '../Components/hoc/Auxilliary';
import withClasss from '../Components/hoc/withClasss';
import AuthContext from '../Components/context/auth-context';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('App.js constructor: ' + constructor);
  }

  state = {
    persons: [
      { id: 'asdf', name: 'Gabi', age: 28 },
      { id: 'qwer', name: 'Dick', age: 29 },
      { id: 'zxvc', name: 'Jim', age: 26 }
    ],
    showPersons: false,
    userInput: '',
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  }

 static getDerivedStateFromProps(props, state) {
  console.log('App.js getderived: ', props);
  return state;
}

  componentDidMount() {
    console.log('App.js component did mount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('App.js shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('App.js componentDidUpdate');
  }


  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState((prevState, props) => {
      return {persons: persons,
      changeCounter: prevState.changeCounter+1}
    })

    //best practice to update state above

    //Another solution
    /*const persons = [...this.state.persons];
    persons.map(person => {
      if (id === person.id) {
        person.name = event.target.value;
      }
    });
    this.setState({persons: persons});*/
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  deletePerson = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});
  }

  onChange = (event) => {
    this.setState({userInput: event.target.value});
  }

  deleteCharHandler = (index) => {
   const text = this.state.userInput.split('');
   text.splice(index, 1);
   const updatedText = text.join('');
   this.setState({userInput: updatedText});
 }

   hideLoginBtn = (event) => {
  this.setState({authenticated: true});
  }

  render () {
    console.log('App.js rendering....')
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <CharComponents
      character={ch}
      key={index}
      clicked={() => this.deleteCharHandler(index)}/>;
    });


  let persons = null;

  if (this.state.showPersons) {
    persons = (
           <People persons={this.state.persons}
                   deletePerson={this.deletePerson}
                   nameChangedHandler={this.nameChangedHandler}
            />
    );
    }

  return (
      <Auxilliary>
      <button onClick={() => {this.setState({showCockpit: false})}}>Hide cockpit!</button>
      <AuthContext.Provider value={{authenticated: this.state.authenticated}}>
        {this.state.showCockpit ? <Cockpit
        togglePersonsHandler={this.togglePersonsHandler}
        showPersons={this.state.showPersons}
        personsLength={this.state.persons.length} /> : null}
        {persons}
      </AuthContext.Provider>
        <input className={classes.input} type="text" value={this.state.userInput} onChange={(event) => this.onChange(event)}/>
        <ValidationComp userInput={this.state.userInput}></ValidationComp>
        {this.state.authenticated ? null : <button onClick={this.hideLoginBtn}>Login</button>
        }
       {charList}
      </Auxilliary>
    );

  }
}

export default withClasss(App, classes.App);
