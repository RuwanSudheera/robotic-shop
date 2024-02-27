
import React, { useState } from 'react';
import Items from './Items';

const Homepage = ({ robots }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter using material type
  const filteredRobots = robots.filter((robot) => {
    return robot.material.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="homepage">
      <h2>SL Robot Shop</h2>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search by material type"
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="row">
      {filteredRobots.map((robot) => (
          <Items key={robot.id} robot={robot} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;