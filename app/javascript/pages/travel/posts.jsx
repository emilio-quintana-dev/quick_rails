import { Helmet } from 'react-helmet-async';

import TravelPostsView from '~/sections/_travel/view/travel-posts-view';

// ----------------------------------------------------------------------

export default function TravelPostsPage() {
  return (
    <>
      <Helmet>
        <title> Travel: Blog</title>
      </Helmet>

      <TravelPostsView />
    </>
  );
}
