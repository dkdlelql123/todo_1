import { useState, useMemo } from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
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
      <OptionDrawer state={todoOptionDrawerState} />
      <NoticeSnackBar />
      {todosState.todos.length === 0 ? (
        <>
          <div className="flex flex-1 flex-col gap-2 justify-center items-center ">
            <div className="text-[color:var(--mui-color-text-primary)] text-sm">
              <span className="text-[color:var(--mui-color-primary-main)]">
                할일
              </span>
              을 입력해주세요.
            </div>
            <Button variant="contained" className="w-[180px]">
              <div>할일 작성하기</div>
            </Button>
          </div>
        </>
      ) : (
        <>
          <NewTodoForm />
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
      )}
    </>
  );
}

export default TodoList;
