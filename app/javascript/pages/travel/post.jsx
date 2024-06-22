import { Helmet } from 'react-helmet-async';

import TravelPostView from '~/sections/_travel/view/travel-post-view';

// ----------------------------------------------------------------------

export default function TravelPostPage() {
  return (
    <>
      <Helmet>
        <title> Travel: Blog Post</title>
      </Helmet>

      <TravelPostView />
    </>
  );
}
