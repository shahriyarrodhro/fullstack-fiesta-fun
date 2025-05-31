
import React from 'react';
import Header from '@/components/layout/Header';
import LoginForm from '@/components/auth/LoginForm';

const Login = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <LoginForm />
    </div>
  );
};

export default Login;
