import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import TinderCards from "./Components/TinderCards/TinderCards";
import SwipeButtons from './Components/SwipeButtons/SwipeButtons';

function App() {
  // BEM naming convention
  return <div className="app">
    {/* Header */}
    <Header />
    {/* Tinder Cards */}
    <TinderCards />
    {/* Swipe Buttons */}
    <SwipeButtons />
  </div>;
}

export default App;
