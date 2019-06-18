import React, { Component } from 'react';
import './App.css';
import PlayerList from './players/PlayerList';

class App extends Component {
  state = {
    greeting: 'Hello World',
    players: [
      {
        id: 1,
        name: 'Rodolfo'
      },
      {
        id: 2,
        name: 'Kayla'
      },
      {
        id: 3,
        name: 'Michael'
      },
      {
        id: 4,
        name: 'Nicholas'
      },
    ]
  }
  render() {
    return (
      <div className="App">
        <h2>{this.state.greeting}</h2>
        <button onClick={this.greetTeam}>Greet</button>
        <PlayerList players = {this.state.players}/>
      </div>
    );
  }
  greetTeam = () => {
    this.setState({
      greeting: "Hello Developers"
    })
  }
}

export default App;
