import React, { useState } from 'react';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import './App.css';


const Auth = () => {
  const [error, setError] = useState<string>('');

  // 新規登録フォームの送信ハンドラー
  const handleRegisterSubmit = () => {
    // APIへのリクエストを送信し、新規登録の処理を行う
    // ...
  };

  // ログインフォームの送信ハンドラー
  const handleLoginSubmit = (formData: FormData) => {
    // APIへのリクエストを送信し、ログインの処理を行う
    // ...
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <RegisterForm onSubmit={handleRegisterSubmit} />
      <LoginForm onSubmit={handleLoginSubmit} />
    </div>
  );
};

export default Auth;
