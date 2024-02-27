
import React from 'react';
import Items from './Items';

const Homepage = ({ robots }) => {
  return (
    <div className="homepage">
      <h2>SL Robot Shop</h2>
      <div className="row">
        {robots.map((robot) => (
          <Items key={robot.id} robot={robot} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;