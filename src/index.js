import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAY0bnAkUYVOgVvd-7H1w8G_BGBYaDjQO8",
  authDomain: "proyectofinalreact-f0e85.firebaseapp.com",
  projectId: "proyectofinalreact-f0e85",
  storageBucket: "proyectofinalreact-f0e85.appspot.com",
  messagingSenderId: "808244085706",
  appId: "1:808244085706:web:f51aa70b720e614c728533"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
