import { Helmet } from 'react-helmet-async';

import LoginIllustrationView from '~/sections/auth/login-illustration-view';

// ----------------------------------------------------------------------

export default function LoginIllustrationPage() {
  return (
    <>
      <Helmet>
        <title> Login: Illustration</title>
      </Helmet>

      <LoginIllustrationView />
    </>
  );
}
