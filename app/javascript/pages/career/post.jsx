import { Helmet } from 'react-helmet-async';

import CareerPostView from '~/sections/_career/view/career-post-view';

// ----------------------------------------------------------------------

export default function CareerPostPage() {
  return (
    <>
      <Helmet>
        <title> Career: Blog Post</title>
      </Helmet>

      <CareerPostView />
    </>
  );
}
