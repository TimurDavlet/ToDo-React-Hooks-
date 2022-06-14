import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

const filterToDo = (todos, activBotton) => {
    switch(activBotton) {
        case 'All':
            return todos;
        case 'Active':
            return todos.filter((task) => !task.active);
        case 'Complited':
            return todos.filter((task) => task.active);
    }
};

const TodoList = ({ todos, activBotton, deleteTodo, deleteCompletedToDo, activTodoTask }) => (
  <List sx={{ width: '100%', maxWidth: 460, bgcolor: 'background.paper', margin: 'auto' }}>
    <Button size="small" sx={{ textAlign: "left" }}>Total tasks: {todos.length}</Button>
    {filterToDo(todos, activBotton).map((todo, index) => (
      <ListItem sx={{ textAlign: 'center' }} key={index.toString()} dense button>
        <Checkbox 
          tabIndex={-1}
          checked={todo.active}
          disableRipple
          onChange={() => {
            activTodoTask(index);
          }}
          />
        <ListItemText primary={todo.task} />
        <ListItemSecondaryAction>
          <IconButton
            aria-label="Delete"
            onClick={() => {
              deleteTodo(index);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ))}
  </List>

);

export default TodoList;
