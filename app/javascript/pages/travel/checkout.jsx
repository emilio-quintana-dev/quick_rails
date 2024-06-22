import { Helmet } from 'react-helmet-async';

import TravelCheckoutView from '~/sections/_travel/view/travel-checkout-view';

// ----------------------------------------------------------------------

export default function TravelCheckoutPage() {
  return (
    <>
      <Helmet>
        <title> Travel: Checkout</title>
      </Helmet>

      <TravelCheckoutView />
    </>
  );
}
