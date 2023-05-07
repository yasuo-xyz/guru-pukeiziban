// このファイルはフロントエンドに該当
import { useState } from 'react';

// Reactコンポーネントの定義
const RegistrationForm = ({ onSubmit }) => {

  // Stateの初期値を空文字列として設定し、それぞれのStateとStateを更新するための関数を定義する
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // フォームのSubmit時のイベントハンドラ
  const handleSubmit = async (event) => {
    // フォームの送信をキャンセル
    event.preventDefault();

    // バリデーションのチェック
    // ユーザー名、メールアドレス、パスワードのいずれかが空欄だった場合、エラーを設定して処理を中断する
    if (!username || !email || !password) {
      setError('全ての項目を入力してください。');
      return;
    }

    try {
      // APIへのPOSTリクエストを送信し、レスポンスを受け取る
      const response = await fetch('/api/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      // レスポンスが成功した場合、成功メッセージを表示し、onSubmitプロップスを呼び出す
      if (response.ok) {
        alert('新規登録が完了しました。');
        onSubmit();
      } else {
        // レスポンスが失敗した場合、エラーメッセージを設定する
        setError('新規登録に失敗しました。');
      }
    } catch (error) {
      // エラーが発生した場合、エラーメッセージを設定する
      console.error('エラー:', error);
      setError('通信エラーが発生しました。');
    }
  };

  // フォームの描画
  // 要素を返す
  return (
    // div要素を返す
    <div>
      {/* h1要素をレンダリングする */}
      <h1>新規登録</h1>
      {/* errorが定義されている場合は、p要素をレンダリングしてエラーメッセージを表示する */}
      {error && <p>{error}</p>}
      {/* フォーム要素をレンダリングする */}
      <form onSubmit={handleSubmit}>
        {/* ユーザー名を入力するinput要素をレンダリングする */}
        <input
          type="text"
          placeholder="ユーザー名"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {/* メールアドレスを入力するinput要素をレンダリングする */}
        <input
          type="email"
          placeholder="メールアドレス"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* パスワードを入力するinput要素をレンダリングする */}
        <input
          type="password"
          placeholder="パスワード"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* フォームを送信するためのボタン要素をレンダリングする */}
        <button type="submit">登録</button>
      </form>
    </div>
  );

};

// RegistrationFormをエクスポートする
export default RegistrationForm;
