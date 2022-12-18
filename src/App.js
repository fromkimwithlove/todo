import React, { useState } from "react";
import { Task } from "./Task";

const App = () => {
  const [newTask, setNewTask] = useState([]);
  const [todoList, setTodoList] = useState([]);

  const handleSubmit = (event) => {
    setNewTask(event.target.value);
    event.preventDefault();
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList([...todoList, task]);
    setNewTask("");
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };
  return (
    <div>
      <div className="container border h-full p-18 m-12 ">
        <h1 className="text-center mt-8 text-4xl font-bol3">
          Another Todo List
        </h1>
        <div onSubmit={handleSubmit} className="form-control  p-8">
          <label className="input-group  input-primary input-bordered input-group-lg">
            <input
              onChange={(event) => setNewTask(event.target.value)}
              value={newTask}
              type="text"
              placeholder="Add todo"
              className="w-full input input-bordered input-xl"
            />
            <button
              type="submit"
              onClick={addTask}
              className="btn btn-secondary"
            >
              Add to List
            </button>
          </label>
        </div>
        <div className="form-control">
          <ul className="m-4">
            {todoList.map((task) => {
              return (
                <Task
                  taskName={task.taskName}
                  id={task.id}
                  completed={task.completed}
                  completeTask={completeTask}
                  deleteTask={deleteTask}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
