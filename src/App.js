import './App.css';

import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      customers: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(customers => this.setState(() => {
        return { customers: customers }
      },
        () => {
          console.log('Customers in State: ', this.state.customers)
        }))
      .catch(error => console.log('Handle this error: ', error));
  }

  render() {
      return (
        <div className="App">
          {this.state.customers.map((customer, index) => <h1 key={index}>{customer.name}</h1>)}
        </div>
      );
  }
}

export default App;
