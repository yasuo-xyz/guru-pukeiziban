import React, { useState } from 'react';

// Propsの型を定義
type LoginFormProps = {
  onSubmit: (formData: FormData) => void;
};

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  // フォーム入力のstateを管理する
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // フォームの送信ハンドラー
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // ログインリクエストのデータを作成
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    try {
      // APIへのリクエストを送信し、ログインの処理を行う
      const response = await fetch('https://example.com/login', {
        method: 'POST',
        body: formData
      });
      if (response.ok) {
        // ログイン成功時の処理
        console.log('ログイン成功');
        // onSubmitコールバックを実行して親コンポーネントにログイン成功を通知
        onSubmit(formData);
      } else {
        // ログイン失敗時の処理
        console.error('ログイン失敗');
      }
    } catch (error) {
      // エラー処理
      console.error('ログイン時にエラーが発生しました', error);
    }

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
        <button>新規登録</button>
        <button type="submit">ログイン</button>
      </form>
    </div>
  );
};

export default LoginForm;
