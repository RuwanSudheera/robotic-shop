
import React, { useState, useEffect } from 'react';
import Items from './Items';
import Cart from './Cart';
import './homepage.css';

const Homepage = ({ robots }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRobots, setSelectedRobots] = useState([]);
  const [robotData, setRobotData] = useState([]);

  useEffect(() => {
    setRobotData(robots);
  }, [robots]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddToCart = (robot) => {
    // Check if the robot is already in the cart
    const existingRobot = selectedRobots.find((r) => r.id === robot.id);

    if (existingRobot && existingRobot.stock > 0) {
      // If the robot is already in the cart, update the quantity
      setSelectedRobots((prevSelectedRobots) =>
        prevSelectedRobots.map((r) =>
          r.id === robot.id ? { ...r, quantity: r.quantity + 1 } : r
        )
      );
      setRobotData((prevRobotData) =>
        prevRobotData.map((robot1) =>
          robot1.id === robot.id
            ? { ...robot1, stock: robot1.stock - 1 }
            : robot1
        )
      );
    } else {
      // If the robot is not in the cart, add it with a quantity of 1
      setSelectedRobots((prevSelectedRobots) => [...prevSelectedRobots, { ...robot, quantity: 1 }]);
    }
  };

  const handleIncrement = (robot) => {
    setSelectedRobots((prevSelectedRobots) =>
      prevSelectedRobots.map((r) =>
        r.id === robot.id ? { ...r, quantity: r.quantity + 1 } : r
      )
    );
    setRobotData((prevRobotData) =>
        prevRobotData.map((robot1) =>
          robot1.id === robot.id
            ? { ...robot1, stock: robot1.stock - 1 }
            : robot1
        )
      );
  };

  const handleDecrement = (robot) => {
    setSelectedRobots((prevSelectedRobots) =>
      prevSelectedRobots.map((r) =>
        r.id === robot.id && r.quantity > 0 ? { ...r, quantity: r.quantity - 1 } : r
      )
    );
    setRobotData((prevRobotData) =>
        prevRobotData.map((robot1) =>
          robot1.id === robot.id
            ? { ...robot1, stock: robot1.stock + 1 }
            : robot1
        )
      );
  };

  // Filter using material type
  const filteredRobots = robotData.filter((robot) => {
    return robot.material.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="homepage">
      <h2>SL Robot Shop</h2>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search by material"
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="row">
        <div className="col-md-8">

          <div className="row">
            {filteredRobots.map((robot) => (
              <Items key={robot.id} robot={robot} onAddToCart={() => handleAddToCart(robot)} />
            ))}
          </div>
        </div>

        <div className="col-md-4">
          {/* Cart component */}
          <Cart selectedRobots={selectedRobots} onIncrement={handleIncrement} onDecrement={handleDecrement} />
        </div>
      </div>
    </div>
  );
};

export default Homepage;