import React, { useState } from 'react';

// Propsの型を定義
type LoginFormProps = {
  onSubmit: (formData: FormData) => void;
};

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  // フォーム入力のstateを管理する
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<string[]>([]);

  // フォームの送信ハンドラー
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // バリデーションチェックを実行
    const validationErrors: string[] = [];
    if (!username) {
      validationErrors.push('メールアドレスを入力してください。');
    }
    if (password.length < 6) {
      validationErrors.push('パスワードは6文字以上で入力してください。');
    }

    if (validationErrors.length > 0) {
      // エラーがある場合は、エラーを表示する
      setErrors(validationErrors);
      return;
    }

    // ログインリクエストのデータを作成
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    try {
      // APIへのリクエストを送信し、ログインの処理を行う
      const response = await fetch('https://example.com/login', {
        method: 'POST',
        body: formData,
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
      {errors.length > 0 && (
        <ul>
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}
      <form onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="メールアドレス"
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
