import React from 'react';
import { useGoogleLogout } from 'react-google-login';

const clientId =
  '634958844879-f75bn063gdfcgk9e4a4c41h280nq48gq.apps.googleusercontent.com';

function LogoutHooks() {
  const onLogoutSuccess = (res) => {
    console.log('Logged out Success');
    alert('Logged out Successfully ✌');
    sessionStorage.clear();
  };

  const onFailure = () => {
    console.log('Handle failure cases');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <button onClick={signOut} className='button'>
      <img src='icons/google.svg' alt='google login' className='icon'></img>

      <span className='buttonText'>Sign out</span>
    </button>
  );
}

export default LogoutHooks;
