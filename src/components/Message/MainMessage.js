import React, { useState } from "react";
import { useAddMessage } from "../../hooks/api/useMessage";

export default function MainMessage({ user }) {
  const [messageContent, setMessageContent] = useState("");
  const id = localStorage.getItem("id");
  const boxId = user?.id;

  const { mutate: addMessage } = useAddMessage(
    (data) => {
      console.log("Message sent successfully:", data);
      setMessageContent(""); // Clear the input after sending
    },
    (error) => {
      console.error("Error sending message:", error);
    }
  );

  const handleSendMessage = () => {
    if (messageContent.trim()) {
      addMessage({ messageBox: boxId, content: messageContent }); // Send id and content
    }
  };
  if (!user) {
    return <div class="flex-1 p-4">Select a user to view messages</div>;
  }
  return (
    <div class="flex-1 w-30">
      <header class=" flex flex-row bg-white p-4 text-gray-700">
        <img
          src={user?.avatar}
          alt="User Avatar"
          class="w-8 h-8 rounded-full ml-4 mr-4"
        />
        <h1 class="text-2xl font-semibold text-left">{user.name}</h1>
      </header>

      <div class="h-screen overflow-y-auto p-4 pb-36">
        {user.messagesList.map((message, index) => (
          <div
            key={index}
            class={`flex ${
              message?.user?.id == id ? "justify-end" : ""
            } mb-4 cursor-pointer`}
          >
            <img
              src={message?.user?.profilePicture}
              alt="User Avatar"
              class="w-8 h-8 rounded-full ml-4 mr-4"
            />
            <div
              class={`flex max-w-96  text-white ${
                message?.user?.id == id ? "bg-indigo-500" : "bg-red-300"
              } rounded-lg p-3 gap-3`}
            >
              <p>{message.content}</p>
            </div>
          </div>
        ))}
      </div>

      <footer class="bg-white border-t border-gray-300 p-4 absolute bottom-0 w-3/5">
        <div class="flex items-center">
          <input
            type="text"
            onChange={(e) => setMessageContent(e.target.value)}
            placeholder="Type a message..."
            class="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleSendMessage}
            class="bg-indigo-500 text-white px-4 py-2 rounded-md ml-2"
          >
            Send
          </button>
        </div>
      </footer>
    </div>
  );
}
