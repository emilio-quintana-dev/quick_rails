import { Helmet } from 'react-helmet-async';

import ElearningAboutView from '~/sections/_elearning/view/elearning-about-view';

// ----------------------------------------------------------------------

export default function ElearningAboutPage() {
  return (
    <>
      <Helmet>
        <title> E-learning: About us</title>
      </Helmet>

      <ElearningAboutView />
    </>
  );
}
