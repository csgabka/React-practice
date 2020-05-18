import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import ValidationComp from './ValidationComp/ValidationComp';
import CharComponents from './CharComponents/CharComponents';
class App extends Component {
  state = {
    persons: [
      { id: 'asdf', name: 'Gabi', age: 28 },
      { id: 'qwer', name: 'Dick', age: 29 },
      { id: 'zxvc', name: 'Jim', age: 26 }
    ],
    showPersons: false,
    userInput: ''
  }


  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons})
    
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

  render () {
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <CharComponents 
      character={ch} 
      key={index}
      clicked={() => this.deleteCharHandler(index)}/>;
    });

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
      
  let persons = null;

  if (this.state.showPersons) {
    persons = (
           <div>
           { this.state.persons.map((person, index) => {
            return <Person 
            name={person.name}
            age={person.age}
            click={this.deletePerson.bind(this, index)}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)}/>
           })}
        </div>
      );
  }  

  return (
      <div className="App">
        <h1>Basics of react</h1>
        <p>It really works!</p>

        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
        <br />
        <input type="text" value={this.state.userInput} onChange={(event) => this.onChange(event)}/>
        <ValidationComp userInput={this.state.userInput}></ValidationComp>

       {charList}

      </div>
    );
    
  }
}

export default App;
