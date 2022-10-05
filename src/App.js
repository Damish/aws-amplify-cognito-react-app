import { Amplify } from 'aws-amplify';
// import { Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure( {
  region: 'us-east-1',
  userPoolId: //USER_POOL_ID,
  userPoolWebClientId: //USER_POOL_WEB_CLIENT_ID,
  cookieStorage: {
      domain: 'localhost',
      path: '/',
      expires: 365,
      secure: true
  },
  oauth: {
      domain: //DOMAIN,
      scope: ['email', 'profile'],
      redirectSignIn: 'http://localhost:3000/',
      redirectSignOut: 'http://localhost:3000/',
      responseType: 'code'
  }
});

function App({signOut, user}) {
  return (
    <>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign Out</button>
    </>
  );
}

export default withAuthenticator(App);
