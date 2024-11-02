// MessageList.jsx
import React from "react";
import UserList from "../../components/Message/UserList";
import MainMessage from "../../components/Message/MainMessage";
import Header from "../../components/Header";

const MessagePage = () => {
  return (
    <div class="flex flex-row h-screen overflow-hidden">
      <Header />
      <UserList />
      <MainMessage />
    </div>
  );
};

export default MessagePage;
