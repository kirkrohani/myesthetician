import './App.css';

import { Component } from 'react';
import CustomerList from './components/customers/customer-list.component';

class App extends Component {
  constructor() {
    console.log('constructor...');
    super();
    this.state = {
      customers: [],
      filteredCustomers: []
    };
  }

  componentDidMount() {
    console.log('componentDidMount...');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(customers =>
        this.setState(() => {
          return {
            customers: customers,
          filteredCustomers: customers}
        }))
      .catch(error => console.log('Handle this error: ', error));
  }

  filterCustomers = (event) => {
    console.log('filterCustomers...');
    const filteredCustomers = this.state.customers.filter(customer => customer.name.toLowerCase().includes(event.target.value));
    this.setState(() => { return { filteredCustomers } });
  }



  render() {
    const { filterCustomers } = this;
    const { filteredCustomers } = this.state;
      console.log('rendering...', filteredCustomers);
      
    return (
      <div className="App">
          <br />
          <input onChange={filterCustomers}
            className='search-box'
            type='search'
            placeholder='search customers'
          />
         <CustomerList customers={filteredCustomers} />
        </div>
      )
  }
}

export default App;
