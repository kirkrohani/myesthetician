import { Component } from 'react';

class CustomerList extends Component {

  render() {
    const { customers } = this.props;
     console.log('rendering CustomerList...', customers);

    return (
      <div>
        {customers.map((customer, index) => <h1 key={index}>{customer.name}</h1>)}
      </div>
    )
  }
}

export default CustomerList;