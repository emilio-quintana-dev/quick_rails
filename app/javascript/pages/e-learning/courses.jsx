import { Helmet } from 'react-helmet-async';

import ElearningCoursesView from '~/sections/_elearning/view/elearning-courses-view';

// ----------------------------------------------------------------------

export default function ElearningCoursesPage() {
  return (
    <>
      <Helmet>
        <title> E-learning: Courses</title>
      </Helmet>

      <ElearningCoursesView />
    </>
  );
}
