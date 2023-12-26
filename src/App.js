import React, { useState, useEffect } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
  }, []);

  useEffect(() => {
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask }]);
      setNewTask('');
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const editTask = (taskId, newText) => {
    setTasks(
        tasks.map((task) =>
            task.id === taskId ? { ...task, text: newText } : task
        )
    );
  };

  const searchTasks = () => {
    return tasks.filter((task) =>
        task.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
      <div className="todo-list">
        <h2>ToDo List</h2>
        <div className="add-task">
          <input
              type="text"
              placeholder="Добавить задачу"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={addTask}>Добавить</button>
        </div>
        <div className="search-task">
          <input
              type="text"
              placeholder="Поиск по задачам"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <ul>
          {searchTasks().map((task) => (
              <li key={task.id}>
                <span>{task.text}</span>
                <div>
                  <button onClick={() => editTask(task.id, prompt('Изменить задачу:', task.text))}>Редактировать</button>
                  <button onClick={() => deleteTask(task.id)}>Удалить</button>
                </div>
              </li>
          ))}
        </ul>
      </div>
  );
};

export default TodoList;
