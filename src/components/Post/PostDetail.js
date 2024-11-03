import React, { useEffect, useState } from "react";

const PostDetail = ({ post, onClose }) => {
  const [comments, setComments] = useState(post.comments || []); // Giả sử post.comments chứa danh sách bình luận
  const [newComment, setNewComment] = useState(""); // State để lưu bình luận mới

  const handleAddComment = () => {
    if (newComment.trim()) {
      // Thêm bình luận mới vào danh sách bình luận
      setComments([...comments, { id: comments.length + 1, text: newComment }]); // Giả sử id bình luận là index + 1
      setNewComment(""); // Reset ô nhập liệu
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-lg mx-auto overflow-hidden relative">
        {/* Nút đóng ở trên cùng */}
        <button className="absolute top-2 right-2" onClick={onClose}>
          <svg
            className="w-6 h-6 text-gray-500 hover:text-gray-800"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Tiêu đề bài viết */}
        <h2 className="text-xl font-bold mb-2">
          {post.createBy?.firstName} {post.createBy?.lastName}
        </h2>

        {/* Hiển thị hình ảnh bài viết */}
        {post.listAnh &&
          post.listAnh.map((image) => (
            <img
              key={image.id}
              className="w-full mb-4 rounded"
              src={image.linkPicture}
              alt="Post detail"
            />
          ))}

        {/* Nội dung bài viết */}
        <p className="mb-4">{post.contentPost}</p>
        <p className="text-gray-500 text-sm mb-4">{post.createdAt}</p>

        {/* Danh sách bình luận */}
        <div className="max-h-48 overflow-y-auto mb-4">
          {comments.map((comment) => (
            <div key={comment.id} className="flex items-center mb-2">
              <span className="font-semibold mr-2">
                {post.createBy?.firstName}
              </span>
              <span className="text-gray-700">{comment.text}</span>
            </div>
          ))}
        </div>

        {/* Ô nhập liệu để thêm bình luận */}
        <div className="flex items-center">
          <input
            type="text"
            className="border rounded-l-lg px-4 py-2 w-full focus:outline-none"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white rounded-r-lg px-4 py-2"
            onClick={handleAddComment}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
