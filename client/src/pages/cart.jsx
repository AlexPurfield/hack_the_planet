import React from "react";
import { Badge, ListGroup } from "react-bootstrap";
import { getCart, removeFromCart } from "../utils/CartUtils"; // Assumed utility functions

const CartPage = () => {
  const cartItems = getCart(); // Assuming this is a function to get cart items

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
    // ...additional logic to update component state and re-render may be required
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="container h-100">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-md-5 col-lg-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-white">Your cart</span>
            <Badge bg="primary" pill>
              {cartItems.length}
            </Badge>
          </h4>
          <ListGroup className="mb-3">
            {cartItems.map((item) => (
              <ListGroup.Item
                key={item.id}
                className="d-flex justify-content-between lh-sm bg-secondary text-white"
              >
                <div>
                  <h6 className="my-0">{item.name}</h6>
                  <small className="text-muted">{item.description}</small>
                </div>
                <div className="d-flex flex-column align-items-end">
                  <span className="text-white mb-2">${item.price}</span>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => handleRemoveFromCart(item.id)}
                    style={{ height: '38px', width: '75px' }}
                  >
                    Remove
                  </button>
                </div>
              </ListGroup.Item>
            ))}
            <ListGroup.Item className="d-flex justify-content-between bg-secondary text-white">
              <span>Total (USD)</span>
              <strong>${totalPrice.toFixed(2)}</strong>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
