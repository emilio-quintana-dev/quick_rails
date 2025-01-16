import { _brandsColor } from '~/_mock';

import Hero from "~/sections/_home/landing/hero";
import OurClients from '~/sections/_home/landing/our-clients';


// ----------------------------------------------------------------------

export default function HomeView() {
  return (
    <>
      <Hero />

      <OurClients brands={_brandsColor} />
    </>
  );
}
