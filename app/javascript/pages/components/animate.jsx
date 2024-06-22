import { Helmet } from 'react-helmet-async';

import AnimateView from '~/sections/examples/animate-view';

// ----------------------------------------------------------------------

export default function AnimatePage() {
  return (
    <>
      <Helmet>
        <title> Components: Animate</title>
      </Helmet>

      <AnimateView />
    </>
  );
}
