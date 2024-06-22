import { Helmet } from 'react-helmet-async';

import CareerLandingView from '~/sections/_career/view/career-landing-view';

// ----------------------------------------------------------------------

export default function CareerLandingPage() {
  return (
    <>
      <Helmet>
        <title> Career: Home</title>
      </Helmet>

      <CareerLandingView />
    </>
  );
}
