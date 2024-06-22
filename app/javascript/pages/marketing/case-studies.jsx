import { Helmet } from 'react-helmet-async';

import MarketingCaseStudiesView from '~/sections/_marketing/view/marketing-case-studies-view';

// ----------------------------------------------------------------------

export default function MarketingCaseStudiesPage() {
  return (
    <>
      <Helmet>
        <title> Marketing: Case Studies</title>
      </Helmet>

      <MarketingCaseStudiesView />
    </>
  );
}
