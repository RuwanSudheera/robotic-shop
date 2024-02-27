import React from 'react';

const Items = ({ robot }) => {
  const { name, price, stock, createdDate, material, image } = robot;

  return (
    <div className="col-md-4 mb-4"> {/* Use Bootstrap grid classes */}
      <div className="card">
        <img src={image} alt={name} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Price: ${price}</p>
          <p className="card-text">Stock: {stock}</p>
          <p className="card-text">Created Date: {createdDate}</p>
          <p className="card-text">Material: {material}</p>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Items;