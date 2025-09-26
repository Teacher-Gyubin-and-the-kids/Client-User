import React, { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';

type mode = 'login' | 'signup';

interface AuthProps {
  onAuthSuccess?: (userData?: any) => void;
}

const Auth: React.FC<AuthProps> = ({ onAuthSuccess }) => {
  const [mode, setMode] = useState<mode>('login');

  const handleNavigateToSignUp = () => {
    setMode('signup');
  };

  const handleNavigateToLogin = () => {
    setMode('login');
  };

  const handleLoginSuccess = (userData: any) => {
    onAuthSuccess?.(userData);
  };

  const handleSignUpSuccess = () => {
    setMode('login'); 
  };

  return (
    <>
      {mode === 'login' ? (
        <Login
          onNavigateToSignUp={handleNavigateToSignUp}
          onLoginSuccess={handleLoginSuccess}
        />
      ) : (
        <SignUp
          onNavigateToLogin={handleNavigateToLogin}
          onSignUpSuccess={handleSignUpSuccess}
        />
      )}
    </>
  );
};

export default Auth;