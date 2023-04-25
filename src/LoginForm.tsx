// LoginForm.tsx

import React, { useState } from 'react';

type LoginFormProps = {
  onSubmit: (formData: FormData) => void;
};

const LoginForm = ({ onSubmit }: LoginFormProps) => {
  // フォーム入力のstateを管理する
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // フォームの送信ハンドラー
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // APIへのリクエストを送信し、ログインの処理を行う
    // ...

    // フォーム入力をクリアする
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <h2>ログイン</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="ユーザー名"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="パスワード"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">ログイン</button>
      </form>
    </div>
  );
};

export default LoginForm;
