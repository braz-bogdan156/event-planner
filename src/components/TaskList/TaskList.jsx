import React, { useState } from "react";
import PostList from "../PostList/PostList";
import PostForm from "../PostForm/PostForm";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";
import "../styles/App.css";

const TaskList = ({ taskList, removeTaskList, updateTaskListTitle, createPost, removePost, updatePost, toggleComplete }) => {
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(taskList.title);


  return (
    <div className="task-list">
      <div className="task-list-header">
        {editMode ? (
          <MyInput
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={() => {
              updateTaskListTitle(taskList.id, title);
              setEditMode(false);
            }}
            autoFocus
          />
        ) : (
          <h2 onClick={() => setEditMode(true)}>{taskList.title}</h2>
        )}
        <MyButton onClick={() => removeTaskList(taskList.id)}>❌</MyButton>
      </div>
      <PostForm create={(post) => createPost(taskList.id, post)} />
      <PostList
        title= {taskList.title}
        updateTitle={(newTitle) => updateTaskListTitle(taskList.id, newTitle)}
        posts={taskList.posts}
        removePost={(post) => removePost(taskList.id, post)}
        update={(updatedPost) => updatePost(taskList.id, updatedPost)}
        toggleComplete={(id) => toggleComplete(taskList.id, id)}
      />
    </div>
  );
};

export default TaskList;