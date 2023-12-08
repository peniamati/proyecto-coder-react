import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";

import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const firebaseConfig = {
  apiKey: "AIzaSyA_W1iX-Wf083BncAYh-ytVQfhfGEyMR94",
  authDomain: "mc-king-b8390.firebaseapp.com",
  projectId: "mc-king-b8390",
  storageBucket: "mc-king-b8390.appspot.com",
  messagingSenderId: "728341872445",
  appId: "1:728341872445:web:af7c3de4dfa97c91a50f54",
  measurementId: "G-VMZP69YEMH"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)