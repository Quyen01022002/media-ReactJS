import React, { useEffect } from "react";
import { usePostList } from "../hooks/api/usePost";

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
    <div className="max-w-lg mx-auto space-y-6">
      {data?.payload?.map((post) => (
        <div
          key={post.id}
          className="border rounded-lg overflow-hidden shadow-lg bg-white"
        >
          {/* Header: Avatar and Username */}
          <div className="flex items-center p-4">
            <img
              className="w-10 h-10 rounded-full border"
              src={post.createBy?.profilePicture} // Sử dụng avatar từ dữ liệu
              alt={`${post.createBy?.firstName}'s avatar`}
            />
            <div className="ml-3">
              <h2 className="font-semibold text-sm">
                {post.createBy?.firstName} {post.createBy?.lastName}
              </h2>
              <p className="text-xs text-gray-500">
                {post.location || "Location"}
              </p>
            </div>
          </div>

          {/* Post Image */}
          {post.listAnh ? (
            <div className="w-full">
              <img
                className="w-full"
                src={post.listAnh[0]?.linkPicture}
                alt="Post image"
              />{" "}
              {/* Sử dụng image từ dữ liệu */}
            </div>
          ) : (
            <div></div>
          )}

          {/* Actions: Like, Comment, Share */}
          <div className="flex items-center justify-between px-4 py-2">
            <div className="flex space-x-4">
              <button className="focus:outline-none">
                <svg
                  className="w-6 h-6 text-gray-500 hover:text-red-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </button>
              <button className="focus:outline-none">
                <svg
                  className="w-6 h-6 text-gray-500 hover:text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 0-.9-3.8 8.5 8.5 0 1 0-12.68 9.9l-1.46 1.47a.75.75 0 0 0 .22 1.22 7.9 7.9 0 0 0 3.44.85h8.5A8.5 8.5 0 0 0 21 11.5z" />
                </svg>
              </button>
              <button className="focus:outline-none">
                <svg
                  className="w-6 h-6 text-gray-500 hover:text-green-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 8a3 3 0 1 0-3-3 3 3 0 0 0 3 3zm-5 3a2 2 0 1 0-2-2 2 2 0 0 0 2 2zm6.6 4a1.6 1.6 0 1 0-1.6-1.6A1.6 1.6 0 0 0 19.6 15zM5 9.6a1.6 1.6 0 1 0-1.6 1.6A1.6 1.6 0 0 0 5 9.6zM8 19a3 3 0 1 0 3-3 3 3 0 0 0-3 3zm8.6-1.4l-4.8-4.8a1.6 1.6 0 0 0-.8.2l4.8 4.8a1.6 1.6 0 0 0 .8-.2zM7 12.4l4.8 4.8a1.6 1.6 0 0 0-.2-.8L6.2 11.6a1.6 1.6 0 0 0 .8.2z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Post Description */}
          <div className="px-4 ">
            <p className="text-sm">
              <span className="font-semibold">{post.createBy?.firstName}</span>{" "}
              {post.contentPost}
            </p>
            <p className="text-gray-500 text-xs mt-1">{post.createdAt}</p>{" "}
            {/* Sử dụng createdAt từ dữ liệu */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
