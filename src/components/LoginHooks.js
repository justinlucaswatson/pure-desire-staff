import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import googleAuth from '../tokensignin';
import { refreshTokenSetup } from '../utils/refreshToken';

const clientId =
  '634958844879-f75bn063gdfcgk9e4a4c41h280nq48gq.apps.googleusercontent.com';

function LoginHooks() {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    );
    var id_token = res.getAuthResponse().id_token;
    googleAuth(id_token);
    refreshTokenSetup(res);

    var profile = res.getBasicProfile();
    var myUserEntity = {};
    myUserEntity.Id = profile.getId();
    myUserEntity.Name = profile.getName();
    myUserEntity.Picture = profile.getImageUrl();
    myUserEntity.Email = profile.getEmail();

    //Store the entity object in sessionStorage where it will be accessible from all pages of your site.
    sessionStorage.setItem('myUserEntity', JSON.stringify(myUserEntity));
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <button onClick={signIn} className='button'>
      <img src='icons/google.svg' alt='google login' className='icon'></img>

      <span className='buttonText'>Sign in with Google</span>
    </button>
  );
}

export default LoginHooks;
