import React, { useState, useEffect } from "react";
import "./styles/App.css";
import TaskLists from "./components/TaskLists/TaskLists";
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import LoginForm from "./pages/LoginForm/LoginForm";
import RegisterForm from "./pages/RegisterForm";
import './services/firebase'

export default function App() {
// Отримуємо збережений список завдань (якщо є) або створюємо пустий
const [taskLists, setTaskLists] = useState(() => {
  const savedTasks = localStorage.getItem("taskLists");
  return savedTasks ? JSON.parse(savedTasks) : [];
});

// Зберігаємо дані у `localStorage` при кожній зміні `taskLists`
useEffect(() => {
  localStorage.setItem("taskLists", JSON.stringify(taskLists));
}, [taskLists]);

  const createTaskList = (title) => {
    const newTaskList = {
      id: Date.now(),
      title,
      posts: [],
    };
    setTaskLists(structuredClone(taskLists).concat(newTaskList));
  };

  const removeTaskList = (id) => {
    setTaskLists(taskLists.filter((taskList) => taskList.id !== id));
  };

  // Оновлення назви списку
  const updateTaskListTitle = (id, newTitle) => {
    setTaskLists(
      taskLists.map((list) =>
        list.id === id ? { ...list, title: newTitle } : list
      )
    );
  };

  // Додаємо нове завдання в обраний список
  const createPost = (taskListId, newPost) => {
    setTaskLists(
      taskLists.map((list) =>
        list.id === taskListId
          ? {
              ...list,
              posts: [...list.posts, { ...newPost, completed: false }],
            }
          : list
      )
    );
  };

  // Видаляємо завдання з обраного списку
  const removePost = (taskListId, postId) => {
    setTaskLists(
      taskLists.map((list) =>
        list.id === taskListId
          ? { ...list, posts: list.posts.filter((post) => post.id !== postId) }
          : list
      )
    );
  };

  // Оновлення завдання
  const updatePost = (taskListId, updatedPost) => {
    setTaskLists(
      taskLists.map((list) =>
        list.id === taskListId
          ? {
              ...list,
              posts: list.posts.map((post) =>
                post.id === updatedPost.id ? updatedPost : post
              ),
            }
          : list
      )
    );
  };

  // Перемикання завершення завдання
  const toggleComplete = (taskListId, id) => {
    setTaskLists(
      taskLists.map((list) =>
        list.id === taskListId
          ? {
              ...list,
              posts: list.posts.map((post) =>
                post.id === id ? { ...post, completed: !post.completed } : post
              ),
            }
          : list
      )
    );
  };

  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<Navigate to="/register" />} />
        <Route
            path="/home"
            element={
              <TaskLists
                taskLists={taskLists}
                createTaskList={createTaskList}
                removeTaskList={removeTaskList}
                updateTaskListTitle={updateTaskListTitle}
                createPost={createPost}
                removePost={removePost}
                updatePost={updatePost}
                toggleComplete={toggleComplete}
              />
            }
          />
           </Routes>
      </Router>
    </div>
  );
}
