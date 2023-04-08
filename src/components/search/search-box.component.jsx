import './search-box.styles.css';

import { Component } from 'react';

class SearchBox extends Component {



  render() {
    const { placeholderText, onSearchChange, className } = this.props;
    return (
      <input onChange={onSearchChange}
            className={`search-box ${className}`}
            type='search'
            placeholder={placeholderText}
          />)
  }
}

export default SearchBox;