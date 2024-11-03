import React, { useEffect, useState } from "react";
import { usePostList } from "../../hooks/api/usePost";
import PostDetail from "./PostDetail"; // Import PostDetail component

const PostList = () => {
  const {
    mutate: fetchPosts,
    data,
    isLoading,
    isError,
  } = usePostList(
    (data) => {
      console.log("Posts fetched successfully:", data);
    },
    (error) => {
      console.error("Error fetching posts:", error);
    }
  );

  const [selectedPost, setSelectedPost] = useState(null); // State to hold the selected post

  useEffect(() => {
    fetchPosts(); // Call fetchPosts when the component mounts
  }, [fetchPosts]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching posts</div>;
  }

  // Handle post selection
  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  return (
    <div className="max-w-lg mx-auto space-y-6">
      {data?.payload?.map((post) => (
        <div
          key={post.id}
          className="border rounded-lg overflow-hidden shadow-lg bg-white cursor-pointer"
          onClick={() => handlePostClick(post)} // Set onClick to select the post
        >
          {/* Header: Avatar and Username */}
          <div className="flex items-center p-4">
            <img
              className="w-10 h-10 rounded-full border"
              src={post.createBy?.profilePicture} // Use avatar from data
              alt={`${post.createBy?.firstName}'s avatar`}
            />
            <div className="ml-3">
              <h2 className="font-semibold text-sm">
                {post.createBy?.firstName} {post.createBy?.lastName}
              </h2>
            </div>
          </div>

          {/* Post Image */}
          {post.listAnh[0] && (
            <div className="w-full">
              <img
                className="w-full"
                src={post.listAnh[0]?.linkPicture}
                alt="Post image"
              />
            </div>
          )}

          {/* Actions: Like, Comment, Share */}
          <div className="flex items-center justify-between px-4 py-2">
            <button className="text-gray-600 hover:text-red-500">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c2.04 0 3.99.85 5.5 2.36C15.51 3.85 17.46 3 19.5 3 22.58 3 25 5.42 25 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </button>
            <button className="text-gray-600 hover:text-blue-500">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zM11 9v5.09l4.25 2.15a1 1 0 00.75-.08 1 1 0 00.5-.87v-1.5a1 1 0 00-1-1h-3V9a1 1 0 00-1-1z" />
              </svg>
            </button>
            <button className="text-gray-600 hover:text-green-500">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 11h-6.59l2.29-2.29a1 1 0 00-1.42-1.42l-4 4a1 1 0 000 1.42l4 4a1 1 0 001.42-1.42L14.41 13H21a1 1 0 000-2z" />
              </svg>
            </button>
          </div>

          {/* Post Description */}
          <div className="px-4 text-left mb-2">
            <p className="text-sm">
              <span className="font-semibold">{post.createBy?.firstName}</span>{" "}
              {post.contentPost}
            </p>
            <p className="text-gray-500 text-xs mt-1">{post.createdAt}</p>
          </div>
        </div>
      ))}
      {selectedPost && (
        <PostDetail post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}{" "}
      {/* Render PostDetail if selected */}
    </div>
  );
};

export default PostList;
