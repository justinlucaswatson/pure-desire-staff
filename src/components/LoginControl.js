import React, { Component } from 'react';
import LoginHooks from './LoginHooks';
import LogoutHooks from './LogoutHooks';

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign in.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

export default class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {
      isLoggedIn: false,
      userId: 0,
      userName: '',
      userEmail: '',
      userPicture: '',
    };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    return (
      <div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
        {sessionStorage.getItem('myUserEntity') === null ? (
          <LoginHooks />
        ) : (
          <LogoutHooks />
        )}
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}
