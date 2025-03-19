import React, { useState } from "react";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";
import { Check, X } from "lucide-react";
import classes from "./PostItem.module.css";

const PostItem = ({ post, number, removePost, update, toggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedPost, setEditedPost] = useState({ ...post });

  const handleSave = () => {
    update(editedPost);
    setIsEditing(false);
  };

  return (
    <div className={classes.post}>
      <div className="post__content">
        {isEditing ? (
          <>
            <MyInput
              value={editedPost.title}
              onChange={(e) =>
                setEditedPost({ ...editedPost, title: e.target.value })
              }
              type="text"
            />
            <MyInput
              value={editedPost.body}
              onChange={(e) =>
                setEditedPost({ ...editedPost, body: e.target.value })
              }
              type="text"
            />
          </>
        ) : (
          <>
            <strong>
              {number} {post.title}
            </strong>
            <div>{post.body}</div>
          </>
        )}
      </div>
      <div className="post__btns">
        <input
          type="checkbox"
          checked={post.completed}
          onChange={() => toggleComplete(post.id)}
        />
        {post.completed ? <Check size={20} /> : <X size={20} />}
        {isEditing ? (
          <MyButton onClick={handleSave}>Save</MyButton>
        ) : (
          <MyButton onClick={() => setIsEditing(true)}>Edit</MyButton>
        )}
        <MyButton onClick={() => removePost(post.id)}>Delete</MyButton>
      </div>
    </div>
  );
};

export default PostItem;