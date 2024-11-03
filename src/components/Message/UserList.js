import React, { useEffect } from "react";
import { useMessageList } from "../../hooks/api/useMessage";

export default function UserList({ onSelectUser }) {
  const {
    mutate: fetchPosts,
    data,
    isLoading,
    isError,
  } = useMessageList(
    (data) => {
      console.log("Posts fetched successfully:", data);
    },
    (error) => {
      console.error("Error fetching posts:", error);
    }
  );

  useEffect(() => {
    fetchPosts(); // Gọi hàm fetchPosts khi component mount
  }, [fetchPosts]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching posts</div>;
  }
  return (
    <div class="w-1/4 ml-60 bg-white border-r border-gray-300">
      <header class="p-4 border-b border-gray-300 flex justify-between items-center bg-indigo-600 text-white">
        <h1 class="text-2xl font-semibold">Chat Web</h1>
        <div class="relative">
          <button id="menuButton" class="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-100"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path d="M2 10a2 2 0 012-2h12a2 2 0 012 2 2 2 0 01-2 2H4a2 2 0 01-2-2z" />
            </svg>
          </button>
          <div
            id="menuDropdown"
            class="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg hidden"
          >
            <ul class="py-2 px-3">
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-gray-800 hover:text-gray-400"
                >
                  Option 1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-gray-800 hover:text-gray-400"
                >
                  Option 2
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div class="overflow-y-auto h-screen p-3 mb-9 pb-20">
        {data?.payload?.map((mess) => (
          <div
            class="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md"
            onClick={() => onSelectUser(mess)}
          >
            <div class="w-12 h-12 bg-gray-300 rounded-full mr-3">
              <img
                src={mess.avatar}
                alt="User Avatar"
                class="w-12 h-12 rounded-full"
              />
            </div>
            <div class="flex-1">
              <h2 class="text-lg font-semibold text-left">{mess.name}</h2>
              <p class="text-gray-600 text-left">
                {mess.messagesList[0]?.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
