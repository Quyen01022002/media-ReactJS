import React from "react";
import Header from "../components/Header";
import PostList from "../components/Post/PostList";

const HomePage = () => {
  return (
    <div className="flex flex-row">
      <Header></Header>
      <div className="mx-auto">
        <PostList />
      </div>
    </div>
  );
};

export default HomePage;
