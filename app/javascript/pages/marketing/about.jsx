import { Helmet } from 'react-helmet-async';

import MarketingAboutView from '~/sections/_marketing/view/marketing-about-view';

// ----------------------------------------------------------------------

export default function MarketingAboutPage() {
  return (
    <>
      <Helmet>
        <title> Marketing: About us</title>
      </Helmet>

      <MarketingAboutView />
    </>
  );
}
