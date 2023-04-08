import './App.css';

import { Component } from 'react';
import CustomerList from './components/customers/customer-list.component';
import SearchBox from './components/search/search-box.component';

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
    const { filteredCustomers } = this.state;
    const { filterCustomers } = this;
      console.log('rendering...', filteredCustomers);
      
    return (
      <div className="App">
        <br />
        <SearchBox onSearchChange={filterCustomers} placeholderText={'search customer'} className={'customer-search-box'} />
        <CustomerList customers={filteredCustomers} />
      </div>
      )
  }
}

export default App;
