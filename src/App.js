import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name:"Samir", age:23},
      {name:"Hira", age:33},
      {name:"Ankit", age:23}
    ],
    otherState: 'Some other state'
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
      {name:"Samir", age:23},
      {name:newName, age:33},
      {name:"Ankit", age:33}
    ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
      {name:"Samir", age:23},
      {name:event.target.value, age:33},
      {name:"Ankit", age:33}
    ]
    })
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

    return (
      <div className="App">
        <h1>Hi, This is a react App. </h1>
        <button style={style} onClick={() => this.switchNameHandler('Heroes')}>Switch Name</button> 
       

        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} />

        <Person 
        changed={this.nameChangeHandler}
        click={this.switchNameHandler.bind(this, 'Heeera')}
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age} >My hobby: Guitar</Person>

        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age} />
      </div>

    );

    // the above div App gets compiled to below javascript code before compiling behind the scenes 
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this really work or not!!'));

  }
}

export default App;
