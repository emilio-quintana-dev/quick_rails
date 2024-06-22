import { Helmet } from 'react-helmet-async';

import HomeView from '~/sections/_home/view/home-view';

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title> The starting point for your next project</title>
      </Helmet>

      <HomeView />
    </>
  );
}
