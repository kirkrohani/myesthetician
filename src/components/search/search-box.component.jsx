import { Component } from 'react';

class SearchBox extends Component {



  render() {
    const { placeholderText, onSearchChange } = this.props;
    return (
      <input onChange={onSearchChange}
            className='search-box'
            type='search'
            placeholder={placeholderText}
          />)
  }
}

export default SearchBox;