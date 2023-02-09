import './App.css'
import React from 'react'
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import Main from './components/Main'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDWfTaN43PDJtXbNX866OF_7OeDEJSjJkU",
//   authDomain: "back-in-my-day-e9752.firebaseapp.com",
//   projectId: "back-in-my-day-e9752",
//   storageBucket: "back-in-my-day-e9752.appspot.com",
//   messagingSenderId: "937159968092",
//   appId: "1:937159968092:web:964793be0b7931ca4bad99",
//   measurementId: "G-SMV5D5306K"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

function App () {
  return (
    <div className="app">
      <Main />
    </div>
  )
}

export default App
