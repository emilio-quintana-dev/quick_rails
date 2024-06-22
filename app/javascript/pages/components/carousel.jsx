import { Helmet } from 'react-helmet-async';

import CarouselView from '~/sections/examples/carousel-view';

// ----------------------------------------------------------------------

export default function CarouselPage() {
  return (
    <>
      <Helmet>
        <title> Components: Carousel</title>
      </Helmet>

      <CarouselView />
    </>
  );
}
