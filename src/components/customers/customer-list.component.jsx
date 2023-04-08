import './card.styles.css';
import './customer-list.styles.css'

import { Component } from 'react';

class CustomerList extends Component {

  render() {
    const { customers } = this.props;
     console.log('rendering CustomerList...', customers);

    return (
      <div className='customer-list'>
        {customers.map((customer, index) => {
          const { name, email } = customer;
          return (<div key={index} className='customer-container'>
            <img alt={`customer ${name}`} src={`https://robohash.org/${index}?set=set4&size=150x150`} />
            <h2>{name}</h2>
            <p>{email}</p>
          </div>)
        }
        )}
      </div>
    )
  }
}

export default CustomerList;