import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

function Checkout() {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, token } = await stripe.createToken(cardElement);

    if (error) {
      console.log('[error]', error);
    } else {
      // Send the token to your server to create a charge
      console.log('[PaymentMethod]', token);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <CardElement /> */}
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
}
