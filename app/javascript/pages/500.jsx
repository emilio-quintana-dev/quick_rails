import { Helmet } from 'react-helmet-async';

import View500 from '~/sections/error/500-view';

// ----------------------------------------------------------------------

export default function Page500() {
  return (
    <>
      <Helmet>
        <title> 500 Internal Server Error</title>
      </Helmet>

      <View500 />
    </>
  );
}
