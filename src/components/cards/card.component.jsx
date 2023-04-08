import './card.styles.css';

import { Component } from 'react';
class Card extends Component {

  render() {
    const { name, email, index } = this.props;
    return (
      <div key={index} className='customer-container'>
            <img alt={`customer ${name}`} src={`https://robohash.org/${index}?set=set4&size=150x150`} />
            <h2>{name}</h2>
            <p>{email}</p>
      </div>
    )
  }
}

export default Card;