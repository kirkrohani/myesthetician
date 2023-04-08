import { Component } from 'react';

class CustomerList extends Component {

  render() {
    const { filteredCustomers } = this.props;
 
    return (
      <div>
        {filteredCustomers.map((customer, index) => <h1 key={index}>{customer.name}</h1>)}
      </div>
    )
  }
}

export default CustomerList;