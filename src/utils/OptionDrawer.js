import {
  SwipeableDrawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";

function OptionDrawer({ status }) {
  return (
    <>
      <SwipeableDrawer
        onOpen={() => {}}
        anchor={"bottom"}
        open={status.opened}
        onClose={status.close}
      >
        <List>
          <ListItemButton>
            <ListItemText>
              <span
                className={`text-[color:var(--mui-color-primary-main)] font-bold`}
              >
                {status.itemId}번
              </span>
              에 대하여
            </ListItemText>
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemText>수정</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemText>삭제</ListItemText>
          </ListItemButton>
        </List>
      </SwipeableDrawer>
    </>
  );
}

export default OptionDrawer;
