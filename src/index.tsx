import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Reactのルートを作成する
const root = ReactDOM.createRoot(
  // ルート要素として使用するHTML要素を取得する
  document.getElementById('root') as HTMLElement
);

// ルートをレンダリングする
root.render(
  // ReactのStrictModeコンポーネントを使用して、Appコンポーネントをレンダリングする
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
