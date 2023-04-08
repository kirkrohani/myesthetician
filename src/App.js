import './App.css';

import { Component } from 'react';

class App extends Component {
  constructor() {
    console.log('constructor');
    super();
    this.state = {
      customers: [],
      filteredCustomers: []
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(customers => this.setState(
        () => {
          return {
            customers: customers,
            filteredCustomers: customers  }
        },
        () => {
          console.log('Customers in State: ', this.state.customers)
        }))
      .catch(error => console.log('Handle this error: ', error));
  }

  filterCustomers = (event) => {
    const filteredCustomers = this.state.customers.filter(customer => customer.name.toLowerCase().includes(event.target.value));
    this.setState(() => { return { filteredCustomers } });
  }



  render() {
    console.log('rendering....');
    const { filterCustomers } = this;
    const { filteredCustomers } = this.state;
    return (
      <div className="App">
        <br />
        <input onChange={filterCustomers}
          className='search-box'
          type='search'
          placeholder='search customers'
        />
        {filteredCustomers.map((customer, index) => <h1 key={index}>{customer.name}</h1>)}
      </div>
    );
  }
}

export default App;
