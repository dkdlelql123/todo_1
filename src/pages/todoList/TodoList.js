import { useState, useMemo } from "react";
import { AppBar, Toolbar } from "@mui/material";
import { TodosState } from "../../states";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import OptionDrawer from "./OptionDrawer";
import NoticeSnackBar from "./NoticeSnackBar";

function useTodoDrawerState() {
  const [itemId, setItemId] = useState(null);
  const opened = useMemo(() => itemId !== null, [itemId]);
  const close = () => setItemId(null);
  const open = (id) => setItemId(id);
  return { itemId, opened, close, open };
}

function TodoList() {
  const todosState = TodosState();
  const todoOptionDrawerState = useTodoDrawerState();

  return (
    <>
      <AppBar position="static">
        <Toolbar className="justify-center">
          <div className="font-bold text-lg">TODOLIST</div>
        </Toolbar>
      </AppBar>
      <NewTodoForm />
      <OptionDrawer state={todoOptionDrawerState} />
      <NoticeSnackBar />
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
