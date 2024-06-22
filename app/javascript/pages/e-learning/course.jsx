import { Helmet } from 'react-helmet-async';

import ElearningCourseView from '~/sections/_elearning/view/elearning-course-view';

// ----------------------------------------------------------------------

export default function ElearningCoursePage() {
  return (
    <>
      <Helmet>
        <title> E-learning: Course</title>
      </Helmet>

      <ElearningCourseView />
    </>
  );
}
