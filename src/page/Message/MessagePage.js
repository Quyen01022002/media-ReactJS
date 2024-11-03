// MessageList.jsx
import React, { useState } from "react";
import UserList from "../../components/Message/UserList";
import MainMessage from "../../components/Message/MainMessage";
import Header from "../../components/Header";

const MessagePage = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div class="flex flex-row h-screen overflow-hidden">
      <Header />
      <UserList onSelectUser={setSelectedUser} />
      <MainMessage user={selectedUser} />
    </div>
  );
};

export default MessagePage;
