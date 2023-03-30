import './App.css';

import { Component } from 'react';
import logo from './logo.svg';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: " Your momma don't wear no draws! Class Component."
    };
  }

  render() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>{this.state.text}</p>
            <button>Change Text</button>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      );
  }
}

export default App;
