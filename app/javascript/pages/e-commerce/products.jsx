import { Helmet } from 'react-helmet-async';

import EcommerceProductsView from '~/sections/_ecommerce/view/ecommerce-products-view';

// ----------------------------------------------------------------------

export default function EcommerceProductsPage() {
  return (
    <>
      <Helmet>
        <title> E-commerce: Products</title>
      </Helmet>

      <EcommerceProductsView />
    </>
  );
}
