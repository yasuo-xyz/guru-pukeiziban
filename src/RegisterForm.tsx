import React, { useState } from 'react';

interface RegisterFormProps {
  onSubmit: (formData: FormData) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
  // フォーム入力のstateを管理する
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  // フォームの送信ハンドラー
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // フォームのデフォルトの送信を防止
    const formData = new FormData(event.target as HTMLFormElement); // フォームデータを取得
    // 送信処理
    // ...
    // 親コンポーネントから渡された onSubmit プロパティを呼び出す
    onSubmit(formData);
  };

  return (
    <div>
      <h2>新規登録</h2>
      <form onSubmit={handleSubmit}>
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
        <input
          type="email"
          placeholder="メールアドレス"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">登録</button>
      </form>
    </div>
  );
};

export default RegisterForm;
