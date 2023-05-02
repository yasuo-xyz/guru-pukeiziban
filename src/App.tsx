// そもそもReactはフロントエンドのUIを開発するために使用されるライブラリ（バックエンドのフレームワークではない！）
// このファイルはバックエンドに該当
// エンドポイント(HTTPリクエスト)と通信する為ににaxiosの設定を行う
// 大変だった事：別のサイトを表示する
import './App.css';
import Auth from './Auth';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:3000/api/";

function App() {
  return (
    <div className="content">
      <Auth />
    </div>
  );
}

export default App;
