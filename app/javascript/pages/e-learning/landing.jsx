import { Helmet } from 'react-helmet-async';

import ElearningLandingView from '~/sections/_elearning/view/elearning-landing-view';

// ----------------------------------------------------------------------

export default function ElearningLandingPage() {
  return (
    <>
      <Helmet>
        <title> E-learning: Home</title>
      </Helmet>

      <ElearningLandingView />
    </>
  );
}
