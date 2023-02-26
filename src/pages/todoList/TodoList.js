import { useRef, useState, useMemo } from "react";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import dateToStr from "../../utils/dateForStr";
import OptionDrawer from "./OptionDrawer";
import { AppBar, Toolbar, Snackbar, Alert, SliderMark } from "@mui/material";
import NoticeSnackBar from "./NoticeSnackBar";

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
  const modifyTodo = (editId, newContent) => {
    const newTodos = todos.map((todo, i) =>
      todo.id !== editId
        ? todo
        : { ...todo, content: newContent, updateDate: dateToStr(new Date()) }
    );
    setTodos(newTodos);
  };
  const removeTodo = (removeId) => {
    const newTodos = todos.filter((e) => e.id !== removeId);
    setTodos(newTodos);
  };
  const findTodoIndexById = (id) => {
    return todos.findIndex((todo) => todo.id === id);
  };
  const findTodoById = (id) => {
    const index = findTodoIndexById(id);
    if (index === -1) return null;
    return todos[index];
  };
  return { todos, addTodo, modifyTodo, removeTodo, findTodoById };
}

function useTodoDrawerState() {
  const [itemId, setItemId] = useState(null);
  const opened = useMemo(() => itemId !== null, [itemId]);
  const close = () => setItemId(null);
  const open = (id) => setItemId(id);
  return { itemId, opened, close, open };
}

function useNoticeSnackBarState() {
  const [opened, setOpened] = useState(false);
  const [msg, setMsg] = useState();
  const [severity, setSeverity] = useState();
  const [autoHideDuration, setAutoHideDuration] = useState();
  const open = (
    msg = "메세지를 입력해주세요",
    severity = "success",
    duration = "3000"
  ) => {
    setOpened(true);
    setMsg(msg);
    setSeverity(severity);
    setAutoHideDuration(duration);
  };
  const close = () => setOpened(false);
  return { opened, msg, severity, autoHideDuration, open, close };
}

function TodoList() {
  const todosState = useTodosState();
  const snackBarState = useNoticeSnackBarState();
  const todoOptionDrawerState = useTodoDrawerState();

  const [open, setOpen] = useState(false);
  return (
    <>
      <NoticeSnackBar snackBarState={snackBarState} />

      <AppBar position="static" onClick={() => snackBarState.open("hi")}>
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
