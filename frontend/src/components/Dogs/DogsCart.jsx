import React, { useState } from "react";

const DogsCart = (props) => {
  const { dog } = props;
  const [isAdd, setAdd] = useState(false);
  const handleClick = () => {
    setAdd(!isAdd);
  };
  return (
    <div className="col-md-3">
      <div className="card mb-3" style={{ height: "450px" }}>
        <div className="dogs-img-container">
          <img
            style={{ height: "200px", objectFit: "cover" }}
            className="card-img-top dog-img"
            src={dog.imageUrl}
            alt={dog.name}
          />
        </div>
        <div className="card-body dogs-info">
          <h4 className="card-title">{dog.name}</h4>
          <p className="card-text dogs-des">{dog.description}</p>
          <p className="card-text dogs-price">${dog.price}</p>
          {isAdd ? (
            <button className="dogs-btn btn btn-primary disabled">
              Added
            </button>
          ) : (
            <button onClick={handleClick} className="dogs-btn btn btn-success">
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DogsCart;
