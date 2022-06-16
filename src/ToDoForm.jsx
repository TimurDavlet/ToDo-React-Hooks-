/* eslint-disable react/prop-types */
import React from 'react';
import TextField from '@mui/material/TextField';
import useInputState from './useInputState.jsx';

const TodoForm = ({ saveTodo }) => {
  const { value, reset, onChange } = useInputState();

  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        saveTodo(value);
        reset();
      }}
    >
      <TextField sx={{ width: '100%', maxWidth: 460, bgcolor: 'background.paper' }}
        variant="outlined"
        placeholder="Add todo"
        margin="normal"
        onChange={onChange}
        value={value}
      />
    </form>
  );
};

export default TodoForm;
