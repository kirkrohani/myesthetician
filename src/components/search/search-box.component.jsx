import './search-box.styles.css';

const SearchBox = ({ placeholderText, onSearchChange, className } ) => (
  <input onChange={onSearchChange}
        className={`search-box ${className}`}
        type='search'
        placeholder={placeholderText}
      />)

export default SearchBox;