import React from "react";
import PostItem from "../PostItem/PostItem";

const PostList = ({ posts, removePost, update, toggleComplete }) => {
  return (
    <div className="post-list">
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