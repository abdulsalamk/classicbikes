import React, { Component } from "react";
import "./App.css";
import Products from "./components/products";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeai_YUw1cPkJGTvO1tmsHmCqjiUlEFCI",
  authDomain: "oakseeds-a9539.firebaseapp.com",
  projectId: "oakseeds-a9539",
  storageBucket: "oakseeds-a9539.appspot.com",
  messagingSenderId: "505606297457",
  appId: "1:505606297457:web:422e3d11584b9170d9c8d0",
  measurementId: "G-GSJ82FEF76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

class App extends Component {
  state = {
    visible: true
  };

  render() {
    return (
      <div className="App">
        <Products />
      </div>
    );
  }
}

export default App;
