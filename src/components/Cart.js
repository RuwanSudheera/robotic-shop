import React, { useEffect } from 'react';
import './cart.css';

const Cart = ({ selectedRobots, onIncrement, onDecrement }) => {
  // Calculate total quantity and price
  const totalQuantity = selectedRobots.reduce((total, robot) => total + robot.quantity, 0);
  const totalPrice = selectedRobots.reduce((total, robot) => total + robot.price * robot.quantity, 0);

  function formatPriceToLKR(price) {
    const formattedPrice = new Intl.NumberFormat('en-LK', {
      style: 'currency',
      currency: 'LKR'
    }).format(price);
  
    return formattedPrice;
  }

  useEffect(() => {
    if (selectedRobots.length > 5) {
      alert('5 different robots added to the cart!');
    }
  }, [selectedRobots]);

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
              <td>
                <button onClick={() => onDecrement(robot)}>-</button>
                {robot.quantity}
                <button onClick={() => onIncrement(robot)}>+</button>
              </td>
              <td>{formatPriceToLKR(robot.price * robot.quantity)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedRobots.length > 0 && (
        <>
          <p>Total Quantity: {totalQuantity}</p>
          <p>Total Price: LKR {formatPriceToLKR(totalPrice)}</p>
        </>
      )}
    </div>
  );
};

export default Cart;
