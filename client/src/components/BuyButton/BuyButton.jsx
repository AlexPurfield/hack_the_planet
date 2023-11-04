import * as React from 'react';

function BuyButtonComponent() {
  // Paste the stripe-buy-button snippet in your React component
  return (
    <stripe-buy-button
      buy-button-id="{{BUY_BUTTON_ID}}"
      publishable-key="pk_test_51O84RdCtpfsF2ochWsBTZy5oOpGwEYceP8lbqeN9WdTwTnsisaCnnp2Jhb8xnbMF2dy985OBcLuVEtJawMCUlDRH00969W3AJb"
    >
    </stripe-buy-button>
  );
}

export default BuyButtonComponent;