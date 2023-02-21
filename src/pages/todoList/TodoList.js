import { useRef, useState, useMemo } from "react";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import dateToStr from "../../utils/dateForStr";
import OptionDrawer from "./OptionDrawer";
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

    setTodos([newTodo, ...todos]);
  };
  const modifyTodo = (index, newContent) => {
    const newTodos = todos.map((todo, i) =>
      i !== index
        ? todo
        : { ...todo, content: newContent, updateDate: dateToStr(new Date()) }
    );
    setTodos(newTodos);
  };
  const removeTodo = (removeId) => {
    const newTodos = todos.filter((e) => e.id !== removeId);
    setTodos(newTodos);
  };
  return { todos, addTodo, modifyTodo, removeTodo };
}

function useTodoDrawerState() {
  const [itemId, setItemId] = useState(null);
  const opened = useMemo(() => itemId !== null, [itemId]);
  const close = () => setItemId(null);
  const open = (id) => setItemId(id);

  return { itemId, opened, close, open };
}

function TodoList() {
  const todosState = useTodosState();
  const todoOptionDrawerState = useTodoDrawerState();
  return (
    <>
      <AppBar position="static">
        <Toolbar className="justify-center">
          <div className="font-bold text-lg">TODOLIST</div>
        </Toolbar>
      </AppBar>
      <NewTodoForm todosState={todosState} />
      <OptionDrawer todosState={todosState} state={todoOptionDrawerState} />

      <div className="mt-4 px-4 t-8">
        <ul>
          {todosState.todos.map((todo, i) => (
            <TodoListItem
              key={i}
              todo={todo}
              index={i}
              todosState={todosState}
              openDrawer={todoOptionDrawerState.open}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default TodoList;
