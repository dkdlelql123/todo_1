import { useState, useMemo } from "react";
import NewTodoForm from "./todoList/NewTodoForm";
import NoticeSnackBar from "./todoList/NoticeSnackBar";
import OptionDrawer from "./todoList/OptionDrawer";
import TodoList from "./todoList/TodoList";

function useTodoDrawerState() {
  const [itemId, setItemId] = useState(null);
  const opened = useMemo(() => itemId !== null, [itemId]);
  const close = () => setItemId(null);
  const open = (id) => setItemId(id);
  return { itemId, opened, close, open };
}

function ListPage() {
  const todoOptionDrawerState = useTodoDrawerState();
  return (
    <>
      <OptionDrawer state={todoOptionDrawerState} />
      <NoticeSnackBar />
      <TodoList todoOptionDrawerState={todoOptionDrawerState} />
    </>
  );
}

export default ListPage;
