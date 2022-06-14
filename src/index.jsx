import React from 'react';
import ReactDOM from 'react-dom/client';
import ToDoForm from './ToDoForm.jsx';
import ToDoList from './ToDoList.jsx';
import TodoBottonGroup from './ToDoBottonGroup.jsx';
import useToDoState from './useToDoState.jsx';
import Box from '@mui/material/Box';

const App = () => {
  const { todos, activBotton, addTodo, deleteTodo, deleteCompletedToDo, activTodoTask, activeBottonTask } = useToDoState([]);

  return (
    <div className="App">
      <Box sx={{ marginLeft: 40, marginRight: 40, paddingBottom: 2, textAlign: 'center', boxShadow: 2,
      border: 2,
      borderColor: 'background.paper',
      '& .MuiDataGrid-cell:hover': {
        color: 'background.paper',
      },}}>
        <h1>Todos</h1>
        <ToDoForm
          saveTodo={todoText => {
            const trimmedText = todoText.trim();

            if (trimmedText.length > 0) {
              addTodo(trimmedText);
            }
          }}
        />
      
        <ToDoList todos={todos} activBotton={activBotton} deleteTodo={deleteTodo} deleteCompletedToDo={deleteCompletedToDo} activTodoTask={activTodoTask} />
        <TodoBottonGroup todos={todos} activBotton={activBotton} activeBottonTask={activeBottonTask} deleteCompletedToDo={deleteCompletedToDo} />
      </Box>
    </div>
  );
};

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
