import React, { useState } from "react";
import Todo from "./Todo";
import {
  TextField,
  IconButton,
  InputAdornment,
  Container,
  List,
  Paper,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const addTodo = (text) => {
    const newTodos = [...todos, { text, isCompleted: false }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo(todo);
    setTodo("");
  };

  return (
    <Container maxWidth="sm">
      <h1
        style={{
          textAlign: "center",
          fontFamily: "Roboto",
          fontSize: "5rem",
          margin: " 4rem 0",
        }}
      >
        Todo List
      </h1>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          variant="outlined"
          label="New Todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end" onClick={handleSubmit}>
                  <AddCircleOutlineIcon />
                </IconButton>
              </InputAdornment>
            ),
            style: { borderRadius: 25 },
          }}
        />
      </form>
      {todos.length > 0 && (
        <Paper style={{ marginTop: 16 }}>
          <List>
            {todos.map((todo, index) => (
              <Todo
                key={index}
                index={index}
                todo={todo}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
              />
            ))}
          </List>
        </Paper>
      )}
    </Container>
  );
};

export default TodoList;
