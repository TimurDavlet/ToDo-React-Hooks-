import React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

const completedButton = (deleteCompletedToDo) => {
    return (
    <div><Button onClick={() => deleteCompletedToDo()} color="secondary" size="small">Clear Completed</Button></div>
    );
};

const TodoBottonGroup = ({todos, activeBottonTask, deleteCompletedToDo}) => {
      
  return (
    <><ButtonGroup sx={{ paddingBottom: 2, paddingTop: 2 }} variant="text" size="small" aria-label="text button group">
      <Button onClick={() => activeBottonTask('All')}>All</Button>
      <Button onClick={() => activeBottonTask('Active')}>Active</Button>
      <Button onClick={() => activeBottonTask('Complited')}>Completed</Button>
      </ButtonGroup>{todos.filter((task) => task.active).length > 0 
          ? <div><Button onClick={() => deleteCompletedToDo()} color="secondary" size="small">Clear Completed</Button></div>
          : null}</>
  );
};
      
      export default TodoBottonGroup;
      