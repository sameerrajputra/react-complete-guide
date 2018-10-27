import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {id:'ans', name:"Samir", age:23},
      {id:'dsf21', name:"Hira", age:33},
      {id:'asw', name:"Ankit", age:23}
    ],
    otherState: 'Some other state',
    showPersons: false
  }

  changeNameHandler = (event, id) => {
    var personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    var person = {
      ...this.state.persons[personIndex]
    };

    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    var persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  toggleHandler = () => {
    const toggle = this.state.showPersons;

    this.setState({showPersons: !toggle});
  }

  deletePersonHandler = (personIndex) => {
    //Both methods can be used for const persons = this.state.persons
    //It is done to update the state immutably 
    //Arrays are reference type so the main arrays change whenever above method is used and splice

    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];  //Spread Operator ...

    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    //styling is done in react as a object based it should only be used when applied for specific elements within a component
    //However hover and other attributes are difficult to implement
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      cursor: 'pointer',
      padding: '8px'
    };

    let persons = null;

    if( this.state.showPersons ) {
      persons = (
          <div>
          {
            this.state.persons.map((person, index) => {
              return <Person 
              click={this.deletePersonHandler.bind(this, index)}
              changed={(event) => this.changeNameHandler(event, person.id)}
              name={person.name} 
              age={person.age} 
              key={person.id} />
            })
          }
          </div>
        );
    };

    return (
      <div className="App">
        <h1>Hi, This is a react App. </h1>
        <button style={style} onClick={() => this.toggleHandler()}>Toggle Names</button> 
        {persons}
      </div>

    );

    // the above div App gets compiled to below javascript code before compiling behind the scenes 
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this really work or not!!'));

  }
}

export default App;
