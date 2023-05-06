// そもそもReactはフロントエンドのUIを開発するために使用されるライブラリ（バックエンドのフレームワークではない！）
// このファイルはバックエンドに該当
// エンドポイント(HTTPリクエスト)と通信する為ににaxiosの設定を行う
// 大変だった事：別のサイトを表示する
import './App.css';
import Auth from './Auth';
import axios from 'axios';

// axiosのデフォルトのベースURLを設定する
axios.defaults.baseURL = "http://localhost:3000/api/";

// Appコンポーネントを定義する
function App() {
  // 要素を返す
  return (
    // "content"というクラスを持つdiv要素を返す
    <div className="content">
      // Authコンポーネントをレンダリングする
      <Auth />
    </div>
  );
}


export default App;
