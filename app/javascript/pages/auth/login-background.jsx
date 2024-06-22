import { Helmet } from 'react-helmet-async';

import LoginBackgroundView from '~/sections/auth/login-background-view';

// ----------------------------------------------------------------------

export default function LoginBackgroundPage() {
  return (
    <>
      <Helmet>
        <title> Login: Background</title>
      </Helmet>

      <LoginBackgroundView />
    </>
  );
}
