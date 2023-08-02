import React from "react";
import {
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  ListItemSecondaryAction,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
  return (
    <ListItem
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <Checkbox
        checked={todo.isCompleted}
        onClick={() => completeTodo(index)}
      />
      <ListItemText primary={todo.text} />
      <ListItemSecondaryAction>
        <IconButton edge="end" onClick={() => removeTodo(index)}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Todo;
