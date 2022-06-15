/* eslint-disable default-case */
import { useState, useEffect } from 'react';

export default (initialValue) => {
  const [todos, setTodos] = useState(initialValue);
  const [activBotton, setActivBotton] = useState('All');

  return {
    todos,
    activBotton,
    addTodo: (todoText) => {
      setTodos([...todos, { task: todoText, active: false }]);
    },
    deleteTodo: (todoIndex) => {
      const newTodos = todos.filter((_, index) => index !== todoIndex);
      setTodos(newTodos);
    },
    deleteCompletedToDo: () => {
      const newTodos = todos.filter((task) => !task.active);
      setTodos(newTodos);
    },
    activTodoTask: (todoIndex) => {
      // eslint-disable-next-line max-len
      const activTodos = todos.map((todo, index) => (index === todoIndex ? ({ active: !todo.active, task: todo.task }) : todo));
      setTodos(activTodos);
    },
    activeBottonTask: (bottonName) => {
      switch (bottonName) {
        case 'All':
          setActivBotton('All');
          return;
        case 'Active':
          setActivBotton('Active');
          return;
        case 'Complited':
          setActivBotton('Complited');
      }
    },
  };
};
