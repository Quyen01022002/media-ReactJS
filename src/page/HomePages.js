import React from "react";
import Header from "../components/Header";
import PostList from "../components/PostList";

const HomePage = () => {
  return (
    <div className="flex flex-row">
      <Header></Header>
      <div className="mx-auto">
        <input className="w-30" placeholder="Quyến nè"></input>
        <PostList />
      </div>
    </div>
  );
};

export default HomePage;
