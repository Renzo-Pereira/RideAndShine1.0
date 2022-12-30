import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { CartContextProvider } from "./context/cartContext";
import {RouterProvider} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { router } from './router';


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDM30-8hne_yUs2t32jfz63Nz7hds6tZ9E",
  authDomain: "rideandshine-e97c3.firebaseapp.com",
  projectId: "rideandshine-e97c3",
  storageBucket: "rideandshine-e97c3.appspot.com",
  messagingSenderId: "46747415893",
  appId: "1:46747415893:web:6d7f9a22a81f999d07abdc"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();  
