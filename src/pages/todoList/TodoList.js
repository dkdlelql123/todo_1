import { useState, useMemo } from "react";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import OptionDrawer from "./OptionDrawer";
import { AppBar, Toolbar } from "@mui/material";
import NoticeSnackBar from "./NoticeSnackBar";
import { TodosState } from "../../states";

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
  const todosState = TodosState();
  const snackBarState = useNoticeSnackBarState();
  const todoOptionDrawerState = useTodoDrawerState();

  return (
    <>
      <AppBar position="static">
        <Toolbar className="justify-center">
          <div className="font-bold text-lg">TODOLIST</div>
        </Toolbar>
      </AppBar>
      <NewTodoForm snackBarState={snackBarState} />
      <OptionDrawer
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
              openDrawer={todoOptionDrawerState.open}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default TodoList;
