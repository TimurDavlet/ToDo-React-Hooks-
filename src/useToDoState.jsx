/* eslint-disable default-case */
import { useState } from 'react';
import { uniqueId } from 'lodash';

export default (initialValue) => {
  const [todos, setTodos] = useState(initialValue);
  const [activBotton, setActivBotton] = useState('All');

  return {
    todos,
    activBotton,
    addTodo: (todoText) => {
      const id = uniqueId();
      setTodos([...todos, { task: todoText, active: false, id }]);
    },
    deleteTodo: (id) => {
      const newTodos = todos.filter((task) => task.id !== id);
      setTodos(newTodos);
    },
    deleteCompletedToDo: () => {
      const newTodos = todos.filter((task) => !task.active);
      setTodos(newTodos);
    },
    activTodoTask: (id) => {
      // eslint-disable-next-line max-len
      const activTodos = todos.map((todo) => (todo.id === id ? ({ active: !todo.active, task: todo.task, id: todo.id }) : todo));
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
