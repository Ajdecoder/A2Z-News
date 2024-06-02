import React, { useState } from 'react';
import SearchBar from './SearchBar';

export const Navbar = ({ setCategory, onSearch }) => {
  const [showCategories, setShowCategories] = useState(false);

  const categories = [
    { id: 'general', label: 'Home' },
    { id: 'india', label: 'My India' },
    { id: 'entertainment', label: 'Entertainment' },
    { id: 'health', label: 'Health' },
    { id: 'tech', label: 'Tech' },
    { id: 'education', label: 'Education', className: 'tohide5' },
    { id: 'robotics', label: 'Robotics', className: 'tohide4' },
    { id: 'tourism', label: 'Tourism', className: 'tohide3' },
    { id: 'Automobiles', label: 'Automobiles', className: 'tohide2' },
    { id: 'Environment', label: 'Environment', className: 'tohide1' },
  ];

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  const onSearchHandler = (searchQuery) => {
    // Call the onSearch function passed as a prop with the search query
    onSearch(searchQuery);
    // Optionally, you can close the categories dropdown or perform other actions
    setShowCategories(false);
  };

  return (
    <div style={{
      position: "relative",
      bottom: "24px",
    }} className=' '>
      <nav className=" fixed-top navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-brand">
          <span className="badge bg-dark text-light rounded-circle">A2Z</span>
        </div>
        <button
          className="navbar-toggler collapsed"
          type="button"
          onClick={toggleCategories}
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* Conditional rendering for toggler icon */}
          {showCategories ? (
            <span className="navbar-toggler-icon close-icon"></span>
          ) : (
            <span className="navbar-toggler-icon"></span>
          )}
        </button>

        <div className={`collapse navbar-collapse ${showCategories ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {categories.map((category) => (
              <li key={category.id} className="nav-item">
                <div
                  className={`nav-link ${category.className}`}
                  onClick={() => setCategory(category.id)}
                >
                  {category.label}
                </div>
              </li>
            ))}


          </ul>

          <SearchBar onSearch={onSearchHandler} />
        </div>
      </nav>
    </div >
  );
};