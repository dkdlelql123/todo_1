import {
  SwipeableDrawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import EditTodoModal from "./EditTodoModal";
import { TodosState } from "../../states";

function useTodoModalState() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return { open, handleOpen, handleClose };
}

function OptionDrawer({ state, snackBarState }) {
  const todosStatus = TodosState();
  const todoModalState = useTodoModalState();

  const removeTodo = () => {
    if (
      window.confirm(`${state.itemId}번 할일을 삭제하시겠습니까?`) === false
    ) {
      return;
    }
    todosStatus.removeTodo(state.itemId);
    state.close();
    snackBarState.open(`${state.itemId}번 글이 삭제되었습니다.`, "error");
  };

  const editTodo = () => {
    todoModalState.handleOpen();
  };

  const todo = todosStatus.findTodoById(state.itemId);

  return (
    <>
      <EditTodoModal
        drawerState={state}
        state={todoModalState}
        todo={todo}
        snackBarState={snackBarState}
      />

      <SwipeableDrawer
        onOpen={() => {}}
        anchor={"bottom"}
        open={state.opened}
        onClose={state.close}
      >
        <List>
          <ListItemButton>
            <ListItemText className="!text-[color:var(--mui-color-grey-700)]">
              <span
                className={`text-[color:var(--mui-color-primary-main)] font-bold`}
              >
                {state.itemId}번
              </span>
              에 대하여
            </ListItemText>
          </ListItemButton>
          <Divider />
          <ListItemButton
            className={`flex items-baseline gap-4 !text-[color:var(--mui-color-grey-700)]`}
            onClick={editTodo}
          >
            <FontAwesomeIcon icon={faEdit} />
            <ListItemText>수정</ListItemText>
          </ListItemButton>
          <ListItemButton
            className={`flex items-baseline gap-4 !text-[color:var(--mui-color-grey-700)]`}
            onClick={removeTodo}
          >
            <FontAwesomeIcon icon={faTrashAlt} />
            <ListItemText>삭제</ListItemText>
          </ListItemButton>
        </List>
      </SwipeableDrawer>
    </>
  );
}

export default OptionDrawer;
