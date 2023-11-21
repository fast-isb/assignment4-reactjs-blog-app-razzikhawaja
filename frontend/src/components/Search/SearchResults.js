import React, { useState } from 'react';
import axios from 'axios'; 

const SearchResults = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get('your-api-endpoint/search', {
        params: { keywords: searchQuery },
      });

      setSearchResults(response.data);
    } catch (error) {
      console.error('Error searching for blog posts', error.response.data);
    }
  };

  return (
    <div>
      <h2>Search Results</h2>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search"
      />
      <button type="button" onClick={handleSearch}>
        Search
      </button>

      {searchResults.length === 0 ? (
        <p>No results found</p>
      ) : (
        <ul>
          {searchResults.map((result) => (
            <li key={result._id}>
              <h3>{result.title}</h3>
              <p>{result.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchResults;
