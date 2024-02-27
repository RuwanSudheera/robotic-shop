import React from 'react';

const Cart = ({ selectedRobots }) => {
  // Calculate total quantity and price
  const totalQuantity = selectedRobots.reduce((total, robot) => total + robot.quantity, 0);
  const totalPrice = selectedRobots.reduce((total, robot) => total + robot.price * robot.quantity, 0);

  return (
    <div className="cart">
      <h3>Shopping Cart</h3>
      <ul>
        {selectedRobots.map((robot) => (
          <li key={robot.id}>
            {robot.name} - Quantity: {robot.quantity} - Price: LKR {robot.price * robot.quantity}
          </li>
        ))}
      </ul>
      <p>Total Quantity: {totalQuantity}</p>
      <p>Total Price: LKR {totalPrice}</p>
    </div>
  );
};

export default Cart;