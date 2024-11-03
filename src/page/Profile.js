import React from "react";
import Header from "../components/Header";
import PostList from "../components/Post/PostList";

export default function Profile() {
  const imageUrl = localStorage.getItem("avatar");
  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");

  return (
    <div className="bg-gray-100">
      <Header />
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4">
          {/* Sidebar with User Profile */}
          <div className="col-span-1 md:col-span-3 bg-white shadow rounded-lg p-6">
            <div className="flex flex-col items-center">
              <img
                src={imageUrl}
                className="w-32 h-32 bg-gray-300 rounded-full mb-4"
                alt="User Avatar"
              />
              <h1 className="text-2xl font-bold mb-2">
                {firstName} {lastName}
              </h1>
              <div className="mt-4 flex space-x-4">
                <a
                  href="/"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition"
                >
                  Contact
                </a>
                <a
                  href="/"
                  className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-full transition"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>

          {/* Post List Section */}
          <div className="col-span-1 md:col-span-9 bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Posts</h2>
            <PostList /> {/* Render PostList component */}
          </div>
        </div>
      </div>
    </div>
  );
}
