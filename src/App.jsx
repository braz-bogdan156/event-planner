import React, { useState } from "react";
import "./components/styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

export default function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript1", body: "Description", completed: false },
    { id: 2, title: "Javascript2", body: "Description", completed: false },
    { id: 3, title: "Javascript3", body: "Description", completed: false },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, { ...newPost, completed: false }]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const updatePost = (updatedPost) => {
    setPosts(posts.map((p) => (p.id === updatedPost.id ? updatedPost : p)));
  };

  const toggleComplete = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, completed: !post.completed } : post
      )
    );
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostList remove={removePost} update={updatePost} toggleComplete={toggleComplete} posts={posts.filter(post => !post.completed)} title="Active Tasks" />
      <PostList remove={removePost} update={updatePost} toggleComplete={toggleComplete} posts={posts.filter(post => post.completed)} title="Completed Tasks" />
    </div>
  );
}