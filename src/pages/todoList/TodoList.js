import { useRef, useState, useMemo } from "react";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import dateToStr from "../../utils/dateForStr";
import OptionDrawer from "./OptionDrawer";
import { AppBar, Toolbar } from "@mui/material";
import NoticeSnackBar from "./NoticeSnackBar";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";

const todosAtom = atom({
  key: "app/todosAtom",
  default: [],
});

function useTodosState() {
  const [todos, setTodos] = useRecoilState(todosAtom);
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
    return newTodo;
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
  const [autoHideDuration, setAutoHideDuration] = useState(null);
  const [severity, setSeverity] = useState(null);
  const [msg, setMsg] = useState(null);

  const open = (msg, severity = "success", autoHideDuration = 1000) => {
    setOpened(true);
    setMsg(msg);
    setAutoHideDuration(autoHideDuration);
    setSeverity(severity);
  };

  const close = () => {
    setOpened(false);
  };

  return {
    opened,
    open,
    close,
    autoHideDuration,
    severity,
    msg,
  };
}

function TodoList() {
  const todosState = useTodosState();
  const snackBarState = useNoticeSnackBarState();
  const todoOptionDrawerState = useTodoDrawerState();

  return (
    <>
      <AppBar position="static">
        <Toolbar className="justify-center">
          <div className="font-bold text-lg">TODOLIST</div>
        </Toolbar>
      </AppBar>
      <NewTodoForm todosState={todosState} snackBarState={snackBarState} />
      <OptionDrawer
        todosState={todosState}
        state={todoOptionDrawerState}
        snackBarState={snackBarState}
      />
      <NoticeSnackBar snackBarState={snackBarState} />
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
