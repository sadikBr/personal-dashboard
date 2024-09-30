/* eslint-disable react/prop-types */
import sharedClasses from '../SharedCss.module.css';
import classes from './ToDoList.module.css';

import { useEffect, useRef, useState } from 'react';

const ToDoList = ({ todos, setTodos }) => {
  const [newTodo, setNewTodo] = useState(false);
  const inputRef = useRef(null);

  const [todo, setTodo] = useState('');

  function updateTodo(id) {
    setTodos((todos) => {
      return todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }

  useEffect(() => {
    if (newTodo && inputRef.current) {
      inputRef.current.focus();
    }
  }, [newTodo]);

  return (
    <div className={`container ${sharedClasses.container}`}>
      <div className={sharedClasses.header}>
        <h1>My To-Do List</h1>
        <button
          onClick={() => {
            setTodo('');
            setNewTodo((oldval) => !oldval);
          }}
        >
          {newTodo ? 'Cancel' : 'Add New'}
        </button>
      </div>

      <div className={classes.todos}>
        {todos.length > 0 &&
          todos.map((todo) => (
            <div className={classes.todo} key={todo.id}>
              <input
                type='checkbox'
                checked={todo.checked}
                onChange={() => updateTodo(todo.id)}
              />
              <div
                style={{
                  textDecoration: todo.checked ? 'line-through' : 'none',
                  fontWeight: todo.checked ? 'bolder' : '',
                  color: todo.checked ? 'red' : '',
                }}
              >
                {todo.value}
              </div>
              <button onClick={() => deleteTodo(todo.id)}>&times;</button>
            </div>
          ))}
      </div>

      {newTodo && (
        <form
          className={classes.form}
          onSubmit={(event) => {
            event.preventDefault();
            setTodos((todos) => [
              ...todos,
              {
                id: Date.now(),
                value: todo,
                checked: false,
              },
            ]);
            setTodo('');
            setNewTodo(false);
          }}
        >
          <input
            ref={inputRef}
            type='text'
            value={todo}
            onChange={(event) => setTodo(event.target.value)}
          />
          <input type='submit' value='Create' />
        </form>
      )}
    </div>
  );
};

export default ToDoList;
