import { Helmet } from 'react-helmet-async';

import ImageView from '~/sections/examples/image-view';

// ----------------------------------------------------------------------

export default function ImagePage() {
  return (
    <>
      <Helmet>
        <title> Components: Image</title>
      </Helmet>

      <ImageView />
    </>
  );
}
