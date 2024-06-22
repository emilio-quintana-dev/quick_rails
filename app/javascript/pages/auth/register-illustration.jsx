import { Helmet } from 'react-helmet-async';

import RegisterIllustrationView from '~/sections/auth/register-illustration-view';

// ----------------------------------------------------------------------

export default function RegisterIllustrationPage() {
  return (
    <>
      <Helmet>
        <title> Register: Illustration</title>
      </Helmet>

      <RegisterIllustrationView />
    </>
  );
}
