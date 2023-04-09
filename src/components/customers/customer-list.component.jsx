import './customer-list.styles.css'

import Card from '../cards/card.component';

const CustomerList = ({customers}) => 
  (
  <div className='customer-list'>
    {customers.map((customer, index) => {
      const { name, email } = customer;
      return (<Card name={name} email={email} index={index} />)
    }
    )}
  </div>
);

export default CustomerList;