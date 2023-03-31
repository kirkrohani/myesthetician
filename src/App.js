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
      .then(customers => this.setState(
        () => { return { customers: customers } },
        () => {
          console.log('Customers in State: ', this.state.customers)
        }))
      .catch(error => console.log('Handle this error: ', error));
  }

  render() {
    console.log('rendering....');
      return (
        <div className="App">
          <br />
          <input onChange={
            (evt) => {
              const filteredCustomers = this.state.customers.filter(customer => customer.name.toLowerCase().includes(evt.target.value));

              this.setState({customers: filteredCustomers});
            }
          }
            className='search-box'
            type='search'
            placeholder='search customers'
          />
          {this.state.customers.map((customer, index) => <h1 key={index}>{customer.name}</h1>)}
        </div>
      );
  }
}

export default App;
