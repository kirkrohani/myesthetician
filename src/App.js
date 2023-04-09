import './App.css';

import { useEffect, useState } from 'react';

import CustomerList from './components/customers/customer-list.component';
import SearchBox from './components/search/search-box.component';

const App = () => {
  console.log('rendering App...');
  const [customers, setCustomers] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
      .then(customers => {
        console.log('fetched customers: ', customers);
        setCustomers(customers);
        setFilteredCustomers(customers);
      })
    .catch(error => console.log('Handle this error: ', error));
  }, [])

  const filterCustomers = (event) => {
    console.log('filterCustomers...');
    const filteredCustomers = customers.filter(customer => customer.name.toLowerCase().includes(event.target.value));
    setFilteredCustomers(filteredCustomers);
  }

  return (
    <div className="App">
      <br />
      <h1 className='app-title'>My Esthetician</h1>
      <SearchBox onSearchChange={filterCustomers} placeholderText={'search customer'} className={'customer-search-box'} />
      <CustomerList customers={filteredCustomers} />
    </div>
  );
}

export default App;
