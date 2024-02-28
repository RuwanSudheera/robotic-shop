import React from 'react';
import './Items.css';

const Items = ({ robot, onAddToCart }) => {
  const { name, price, stock, createdAt, material, image } = robot;

  const originalDate = new Date(createdAt);
  const formattedDate = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit', month: '2-digit', year: 'numeric',
  }).format(originalDate);

  return (
    <div className="outer-card col-md-4 mb-4">
      <div className="card">
        <img src={image} alt={name} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Price: LKR {price}</p>
          <p className="card-text">Stock: {stock}</p>
          <p className="card-text">Created Date: {formattedDate}</p>
          <p className="card-text">Material: {material}</p>
          <button className={`btn btn-primary${stock === 0 ? ' disabled' : ''}`} disabled={stock === 0}
          onClick={onAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Items;