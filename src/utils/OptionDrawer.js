import { Drawer } from "@mui/material";

function OptionDrawer({ status }) {
  return (
    <>
      <Drawer anchor={"bottom"} open={status.opened} onClose={status.close}>
        <div className="p-10">{status.itemId}번 drawer</div>
      </Drawer>
    </>
  );
}

export default OptionDrawer;
