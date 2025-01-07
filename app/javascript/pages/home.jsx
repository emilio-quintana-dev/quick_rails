import { Helmet } from "react-helmet-async";

import HomeView from "~/sections/_home/view/home-view";

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>SaaS Boilerplate by Llapingacho</title>
      </Helmet>

      <HomeView />
    </>
  );
}
