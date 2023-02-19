import { SwipeableDrawer } from "@mui/material";

function OptionDrawer({ status }) {
  return (
    <>
      <SwipeableDrawer
        onOpen={() => {}}
        anchor={"bottom"}
        open={status.opened}
        onClose={status.close}
      >
        <div className="p-10">{status.itemId}번 drawer</div>
      </SwipeableDrawer>
    </>
  );
}

export default OptionDrawer;
