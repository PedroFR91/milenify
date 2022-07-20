import React, { useEffect, useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { auth } from '../../firebase';
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import './Login.css';

function Login(props) {
  const login = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((re) => {
        console.log(re);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const logout = () => {
    signOut(auth);
  };
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
    // console.log(currentUser);
  }, [currentUser]);

  const [isHovering, setIsHovering] = useState(false);
  const isHoverLogin = (e) => {
    e.preventDefault();
    setIsHovering(!isHovering);
  };
  return (
    <div
      className='login'
      onMouseEnter={isHoverLogin}
      onMouseLeave={isHoverLogin}
      style={{ color: props.navColor }}
    >
      <div
        style={{
          position: 'fixed',
          top: '5%',
          right: '3%',
          cursor: 'pointer',
          zIndex: 10,
        }}
        onClick={login}
      >
        <AccountCircleIcon
          style={{ color: props.color }}
          sx={{ fontSize: '36px' }}
        />
      </div>
      {isHovering && currentUser && (
        <div
          style={{
            position: 'fixed',
            top: '5%',
            right: '10%',
            cursor: 'pointer',
            zIndex: 20,
            color: props.color,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            minWidth: '100px',
          }}
        >
          <div>{currentUser.displayName}</div>
          <div onClick={logout}>Salir</div>
        </div>
      )}
      {isHovering && !currentUser && (
        <div
          style={{
            position: 'fixed',
            top: '5%',
            right: '10%',
            cursor: 'pointer',
            zIndex: 20,
            color: props.color,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            minWidth: '100px',
          }}
        >
          <div>Iniciar Sesión</div>
        </div>
      )}
    </div>
  );
}

export default Login;
