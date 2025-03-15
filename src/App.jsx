import React, { useState } from "react";
import "./components/styles/App.css";
import TaskLists from "./components/TaskLists";

export default function App() {
  const [taskLists, setTaskLists] = useState([
    // {
    //   id: 1,
    //   title: "Learn React",
    //   posts: [
    //     { id: 2, title: "Завдання 1", body: "Опис завдання", completed: false },
    //     { id: 3, title: "Завдання 2", body: "Опис завдання", completed: false },
    //   ],
    // },
    // {
    //   id: 2,
    //   title: "Learn JavaScript",
    //   posts: [
    //     { id: 3, title: "Завдання 1", body: "Опис завдання", completed: false },
    //     { id: 4, title: "Завдання 2", body: "Опис завдання", completed: true },
    //   ],
    // },
    // {
    //   id: 3,
    //   title: "Learn CSS",
    //   posts: [
    //     { id: 4, title: "Завдання 1", body: "Опис завдання", completed: true },
    //     { id: 5, title: "Завдання 2", body: "Опис завдання", completed: false },
    //   ],
    // },

  ]);

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
            ? { ...list, posts: [...list.posts, { ...newPost, completed: false }] }
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
            }: list
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
  </div>
  );
}