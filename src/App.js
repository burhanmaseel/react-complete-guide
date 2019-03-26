import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28},
      { name: 'Manu', age: 29},
      { name: 'Mini', age: 30},
    ]
  }

  switchNameHandler = (newName) => { 
    // console.log('Was Clicked');
    // Don't do this ===== this.state.persons[0].name = "Burhan";
    this.setState({
      persons: [
        { name: newName, age: 23},
        { name: 'Manu', age: 29},
        { name: 'Mini', age: 22}
    ]});
  }

  nameChangedHandler = (event)=>{
    this.setState({
      persons: [
        { name: 'Max', age: 23},
        { name: event.target.value, age: 29},
        { name: 'Mini', age: 22}
    ]});
  }

  render() {
    return (
      <div className="App">
        <h1>This is my react app</h1>
        <button onClick={() => this.switchNameHandler("Burhan")}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangedHandler}
        >Blablabla</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div',null,React.createElement('h1', {className: 'App'}, 'This is react app'));
  }
}

export default App;
