import React from "react";
import { Container, Table, Button } from "react-bootstrap";
import { getCart, removeFromCart } from "../utils/cartUtils"; // Assumed utility functions
import swal from "sweetalert2"; // SweetAlert2 library

const CartPage = () => {
  // Assuming getCart is a function to get cart items from localStorage or context
  const cartItems = getCart();

  // Handler to remove item from cart
  const handleRemoveFromCart = (itemId) => {
    swal
      .fire({
        icon: "warning",
        title: "Are you sure?",
        text: "Do you want to remove this item from your cart?",
        showCancelButton: true, // Show cancel button
        confirmButtonText: "Yes, remove it!", // Text for confirm button
        cancelButtonText: "No, keep it", // Text for cancel button
        reverseButtons: true, // Reverse the order of confirm and cancel buttons
      })
      .then((result) => {
        // If confirmed, result.value will be true; otherwise, false or undefined if Swal is dismissed by other means
        if (result.value) {
          removeFromCart(itemId); // Remove the item from the cart only if confirmed
          // Update state or re-fetch cart items to reflect changes
        }
      });
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Container>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <Table striped bordered hover variant="dark" responsive>
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>{item.quantity}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="text-right">
            <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
          </div>
        </>
      )}
    </Container>
  );
};

export default CartPage;
