import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchQuery);
    setSearchQuery('');
  };

  return (
    <div>
      <form className="form-inline my-2 my-lg-0 mx-3" onSubmit={handleSubmit}>
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search For any Topic"
          aria-label="Search"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
