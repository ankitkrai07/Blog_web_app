import React from "react";
import "./App.css";
import DisplayAllPosts from "./components/DisplayAllPosts";
import HeaderText from "./components/HeaderText";
//import Post from "./Post";

const App = () => {
  return (
    <>
      <HeaderText />
      <DisplayAllPosts />
    </>
  );
};

export default App;
