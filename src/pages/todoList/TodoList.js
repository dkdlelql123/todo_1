import { useRef, useState } from "react";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import dateToStr from "../../utils/dateForStr";
import { AppBar, Toolbar } from "@mui/material";

function useTodosState() {
  const [todos, setTodos] = useState([]);
  const lastTodoIdRef = useRef(0);

  const addTodo = (newContent) => {
    const id = ++lastTodoIdRef.current;
    const newTodo = {
      id,
      content: newContent,
      regDate: dateToStr(new Date()),
      updateDate: "",
    };

    setTodos([...todos, newTodo]);
  };
  const modifyTodo = (index, newContent) => {
    const newTodos = todos.map((todo, i) =>
      i !== index
        ? todo
        : { ...todo, content: newContent, updateDate: dateToStr(new Date()) }
    );
    setTodos(newTodos);
  };
  const removeTodo = (index) => {
    const newTodos = todos.filter((e, i) => i !== index);
    setTodos(newTodos);
  };
  return { todos, addTodo, modifyTodo, removeTodo };
}

function TodoList() {
  const todosState = useTodosState();
  return (
    <>
      <AppBar position="static">
        <Toolbar className="justify-center">
          <div className="font-bold text-lg">TODOLIST</div>
        </Toolbar>
      </AppBar>
      <NewTodoForm todosState={todosState} />
      <div className="mt-4 px-4 t-8">
        <ul>
          {todosState.todos.map((todo, i) => (
            <TodoListItem
              key={i}
              todo={todo}
              index={i}
              todosState={todosState}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default TodoList;
