import { useState } from 'react';

export default initialValue => {
  const [todos, setTodos] = useState(initialValue);
  const [activBotton, setActivBotton] = useState('All');

  return {
    todos,
    activBotton,
    addTodo: todoText => {
      setTodos([...todos, { task: todoText, active: false }]);
    },
    deleteTodo: todoIndex => {
      const newTodos = todos.filter((_, index) => index !== todoIndex);
      setTodos(newTodos);
    },
    deleteCompletedToDo: () => {
        console.log('bambam')
        const newTodos = todos.filter((task) => !task.active);
        setTodos(newTodos);
    },
    activTodoTask: todoIndex => {
      const activTodos = todos.map((todo, index) => {
        return index === todoIndex ? ({ active: !todo.active, task: todo.task }) : todo;
      });
      setTodos(activTodos);
    },
    activeBottonTask: bottonName => {
        switch(bottonName) {
            case 'All':
                setActivBotton('All');
                return;
            case 'Active':
                setActivBotton('Active');
                return;
            case 'Complited':
                setActivBotton('Complited');
                return;
        }
    }
  };
};
