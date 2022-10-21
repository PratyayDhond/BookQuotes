import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need

import firebase  from "firebase/compat/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBidTZirEbucXDx8Xb9VRm8Y2k0rQRdvcM",
  authDomain: "quotation-react.firebaseapp.com",
  projectId: "quotation-react",
  storageBucket: "quotation-react.appspot.com",
  messagingSenderId: "564855116435",
  appId: "1:564855116435:web:79e2229f6b247bf4c63366",
  measurementId: "G-P7HV5JL86X"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// eslint-disable-next-line
const analytics = getAnalytics(app);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


