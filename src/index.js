import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App'; //App.js 파일을 가져와서 연동
// import reportWebVitals from './reportWebVitals';
import "./assets/scss/_style.scss"

const root = ReactDOM.createRoot(document.getElementById('root')); //index.html 파일에 id root 있던걸 불러옴
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
