import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Newsboard } from "./components/Newsboard";

function App() {
  const [category, setCategory] = useState('general');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const apiKey = `${process.env.REACT_APP_API_KEY}`;
        const apiUrl = `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${apiKey}`;


        const response = await fetch(apiUrl);
        const data = await response.json();


        if (response.ok) {
          setSearchResults(data.articles);
        } else {
          setError('Failed to fetch data');
        }
      } catch (error) {
        setError('An error occurred while fetching data');
      } finally {
        setLoading(false);
      }
    };

    if (searchQuery) {
      fetchData();
    }
  }, [searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setError(null); 
  };

  return (
    <div className=" bg-dark">
      <Navbar setCategory={setCategory} onSearch={handleSearch} />
      <Newsboard category={category} searchResults={searchResults} loading={loading} error={error} />
    </div>
  );
}

export default App;
