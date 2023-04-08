import './customer-list.styles.css'

import Card from '../cards/card.component';
import { Component } from 'react';

class CustomerList extends Component {

  render() {
    const { customers } = this.props;
     console.log('rendering CustomerList...', customers);

    return (
      <div className='customer-list'>
        {customers.map((customer, index) => {
          const { name, email } = customer;
          return (<Card name={name} email={email} index={index} />)
        }
        )}
      </div>
    )
  }
}

export default CustomerList;