import React, { useState } from "react";

const CreatePost = ({ onPostCreated }) => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handlePost = () => {
    onPostCreated({ content, image });
    setContent("");
    setImage(null);
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <textarea
        className="w-full border p-2 rounded mb-2"
        rows="4"
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handlePost}
      >
        Post
      </button>
    </div>
  );
};

export default CreatePost;
