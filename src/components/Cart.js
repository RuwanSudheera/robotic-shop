import React from 'react';
import './cart.css';

const Cart = ({ selectedRobots }) => {
  // Calculate total quantity and price
  const totalQuantity = selectedRobots.reduce((total, robot) => total + robot.quantity, 0);
  const totalPrice = selectedRobots.reduce((total, robot) => total + robot.price * robot.quantity, 0);

  return (
    <div className="cart">
      <h3>Your Cart</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {selectedRobots.map((robot) => (
            <tr key={robot.id}>
              <td>{robot.name}</td>
              <td>{robot.quantity}</td>
              <td>LKR {robot.price * robot.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedRobots.length > 0 && (
        <>
          <p>Total Quantity: {totalQuantity}</p>
          <p>Total Price: LKR {totalPrice}</p>
        </>
      )}
    </div>
  );
};

export default Cart;
