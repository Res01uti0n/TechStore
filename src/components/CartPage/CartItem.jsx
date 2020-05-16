import React from "react";
import {
  FaChevronCircleDown,
  FaChevronCircleUp,
  FaTrash,
} from "react-icons/fa";

export const CartItem = ({ cartItem, increment, decrement, removeItem }) => {
  const { id, title, price, count, total, image } = cartItem;

  return (
    <div className="row mt-5 mt-lg-0 text-capitalize text-center align-items-center">
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <img src={image} width="60" className="img-fluid" alt="Product" />
      </div>

      <div className="col-10 mx-auto col-lg-2 pb-2">
        <span className="d-lg-none">Product: </span>
        {title}
      </div>

      <div className="col-10 mx-auto col-lg-2 pb-2">
        <span className="d-lg-none">Price: </span>${price}
      </div>

      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <FaChevronCircleDown
              onClick={() => decrement(id)}
              className="text-primary cart-icon"
            />

            <span className="text-title text-muted mx-3">{count}</span>

            <FaChevronCircleUp
              onClick={() => increment(id)}
              className="text-primary cart-icon"
            />
          </div>
        </div>
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <FaTrash
          className="cart-icon text-danger"
          onClick={() => removeItem(id)}
        />
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <strong className="text-muted">Item total: ${total}</strong>
      </div>
    </div>
  );
};
