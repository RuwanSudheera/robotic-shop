
import React, { useState } from 'react';
import Items from './Items';
import Cart from './Cart';

const Homepage = ({ robots }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRobots, setSelectedRobots] = useState([]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddToCart = (robot) => {
    // Check if the robot is already in the cart
    const existingRobot = selectedRobots.find((r) => r.id === robot.id);

    if (existingRobot) {
      // If the robot is already in the cart, update the quantity
      setSelectedRobots((prevSelectedRobots) =>
        prevSelectedRobots.map((r) =>
          r.id === robot.id ? { ...r, quantity: r.quantity + 1 } : r
        )
      );
    } else {
      // If the robot is not in the cart, add it with a quantity of 1
      setSelectedRobots((prevSelectedRobots) => [...prevSelectedRobots, { ...robot, quantity: 1 }]);
    }
  };

  // Filter using material type
  const filteredRobots = robots.filter((robot) => {
    return robot.material.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="homepage">
      <div className="row">
        <div className="col-md-8">
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
              <Items key={robot.id} robot={robot} onAddToCart={() => handleAddToCart(robot)} />
            ))}
          </div>
        </div>

        <div className="col-md-4">
          {/* Cart component */}
          <Cart selectedRobots={selectedRobots} />
        </div>
      </div>
    </div>
  );
};

export default Homepage;