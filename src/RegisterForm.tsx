import React, { useState } from 'react';

// Propsの型を定義
type RegistrationFormProps = {
  onSubmit: () => void;
};
// 新規登録フォームのコンポーネント
const RegistrationForm: React.FC<RegistrationFormProps> = () => {
  // ユーザーの入力値を管理するステート
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // フォームの送信ハンドラ
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // バリデーションのチェック
    if (!username || !email || !password) {
      setError('全ての項目を入力してください。');
      return;
    }

    try {
      // バックエンドとの通信を行って新規登録を実行
      const response = await fetch('/api/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        // 新規登録成功の場合の処理
        alert('新規登録が完了しました。');
      } else {
        // 新規登録失敗の場合の処理
        setError('新規登録に失敗しました。');
      }
    } catch (error) {
      console.error('エラー:', error);
      setError('通信エラーが発生しました。');
    }
  };

  return (
    <div>
      <h1>新規登録</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ユーザー名"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="メールアドレス"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="パスワード"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">登録</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
