import { Helmet } from 'react-helmet-async';

import MarketingServicesView from '~/sections/_marketing/view/marketing-services-view';

// ----------------------------------------------------------------------

export default function MarketingServicesPage() {
  return (
    <>
      <Helmet>
        <title> Marketing: Services</title>
      </Helmet>

      <MarketingServicesView />
    </>
  );
}
