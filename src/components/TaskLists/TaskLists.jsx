import React, { useState } from "react";
import TaskList from "../TaskList/TaskList";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";
import classes from "./TaskLists.module.css";


const TaskLists = ({
  taskLists,
  createTaskList,
  removeTaskList,
  updateTaskListTitle,
  createPost,
  removePost,
  updatePost,
  toggleComplete,
}) => {
  const [newListTitle, setNewListTitle] = useState("");

  const handleCreateList = () => {
    if (newListTitle.trim()) {
      createTaskList(newListTitle);
      setNewListTitle("");
    }
  };

  return (
    <div>
      <h1 className= {classes.title}>Task Lists</h1>
      <div>
        <MyInput
          type="text"
          placeholder="New List Title"
          value={newListTitle}
          onChange={(e) => setNewListTitle(e.target.value)}
        />
        <MyButton onClick={handleCreateList}>
          Add List
        </MyButton>
      </div>
      <div className="taskLists">
        {taskLists.map((list) => (
          <TaskList
            key={list.id}
            taskList={list}
            removeTaskList={removeTaskList}
            updateTaskListTitle={updateTaskListTitle}
            createPost={createPost}
            removePost={removePost}
            updatePost={updatePost}
            toggleComplete={toggleComplete}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskLists;