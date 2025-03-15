import React, { useState } from "react";
import PostItem from "./PostItem";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostList = ({ posts, title, updateTitle, removePost, update, toggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleSaveTitle = () => {
    updateTitle(newTitle); // Викликає функцію зміни заголовка
    setIsEditing(false);
  };

  return (
    <div className="post-list">
      <div className="post-list-header">
        {isEditing ? (
          <>
            <MyInput
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <MyButton onClick={handleSaveTitle}>Save</MyButton>
          </>
        ) : (
          <h1 onClick={() => setIsEditing(true)} style={{ textAlign: "center", cursor: "pointer" }}>
            {title}
          </h1>
        )}
      </div>
      {posts.map((post, index) => (
        <PostItem
          removePost={removePost}
          number={index + 1}
          post={post}
          key={post.id}
          update={update}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
};

export default PostList;