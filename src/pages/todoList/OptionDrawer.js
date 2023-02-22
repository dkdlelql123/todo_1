import {
  SwipeableDrawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  ListItemIcon,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

function OptionDrawer({ todosState, state, modalState }) {
  const removeTodo = () => {
    todosState.removeTodo(state.itemId);
    state.close();
  };

  const editTodo = () => {
    modalState.handleOpen();
    todosState.modifyTodo(state.itemId, "");
    //state.close();
  };

  return (
    <>
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
