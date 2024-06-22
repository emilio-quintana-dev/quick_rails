import { Helmet } from 'react-helmet-async';

import EcommerceCompareView from '~/sections/_ecommerce/view/ecommerce-compare-view';

// ----------------------------------------------------------------------

export default function EcommerceComparePage() {
  return (
    <>
      <Helmet>
        <title> E-commerce: Compare</title>
      </Helmet>

      <EcommerceCompareView />
    </>
  );
}
