// このファイルはバックエンドに該当
// エンドポイント(HTTPリクエスト)と通信する為ににaxiosの設定を行う
import { useEffect } from 'react';
import './App.css';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:3000/api/";

function App() {
  const fetchData = async () => {
    try {
      const response = await axios.get('/todos');
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="content">
      {/* <TodoList /> */}
    </div>
  );
}

export default App;
