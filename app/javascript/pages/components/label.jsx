import { Helmet } from 'react-helmet-async';

import LabelView from '~/sections/examples/label-view';

// ----------------------------------------------------------------------

export default function LabelPage() {
  return (
    <>
      <Helmet>
        <title> Components: Label</title>
      </Helmet>

      <LabelView />
    </>
  );
}
