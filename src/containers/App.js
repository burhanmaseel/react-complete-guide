import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from '../components/Cockpit/Cockpit';
class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] inside constructor', props);

    this.state = {
      persons: [
        { id: '1', name: 'Max', age: 28 },
        { id: '2', name: 'Manu', age: 29 },
        { id: '3', name: 'Mini', age: 30 },
      ],
      otherState: 'some other value',
      showPersons: false
    }
  }

  componentWillMount() {
    console.log('[App.js] inside willmount');
  }

  componentDidMount() {
    console.log('[App.js] inside didmount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('UPDATE inside shouldComponentUpdate', nextProps, nextState);
    return nextProps.persons !== this.props.persons;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('UPDATE inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('UPDATE inside componentDidUpdate');
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = persons;

    this.setState({ persons: persons });

    // this.setState({
    //   persons: [
    //     { name: 'Max', age: 23 },
    //     { name: event.target.value, age: 29 },
    //     { name: 'Mini', age: 22 }
    //   ]
    // });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    console.log("Inside app.js render");
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} />
    }


    return (
      <div className={classes.App}>
        <Cockpit
          appTitle={this.props.title}
          showPerson={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}

      </div>
    );
    // return React.createElement('div',null,React.createElement('h1', {className: 'App'}, 'This is react app'));
  }
}


export default App;
