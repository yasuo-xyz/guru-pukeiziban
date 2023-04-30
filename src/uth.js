// このファイルはフロントエンドに該当
import React, { useState } from 'react';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import axios from 'axios';

const Auth = () => {
  const [error, setError] = useState(null);

  // 新規登録フォームの送信ハンドラー
  const handleRegisterSubmit = async () => {
    try {
      // APIへのリクエストを送信し、新規登録の処理を行う
      const response = await axios.post('/api/register', formData);
      console.log(response.data);
    } catch (error) {
      setError('新規登録に失敗しました。もう一度お試しください。');
    }
  };

  // ログインフォームの送信ハンドラー
  const handleLoginSubmit = async (formData) => {
    try {
      // APIへのリクエストを送信し、ログインの処理を行う
      const response = await axios.post('/api/login', formData);
      console.log(response.data);
    } catch (error) {
      setError('ログインに失敗しました。もう一度お試しください。');
    }
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
