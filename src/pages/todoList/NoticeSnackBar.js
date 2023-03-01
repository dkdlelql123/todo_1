import { Snackbar, Alert } from "@mui/material";
import { NoticeSnackBarState } from "../../states";

function NoticeSnackBar() {
  const snackBarState = NoticeSnackBarState();
  return (
    <>
      <Snackbar
        open={snackBarState.opened}
        autoHideDuration={snackBarState.autoHideDuration}
        onClose={snackBarState.close}
      >
        <Alert severity={snackBarState.severity}>{snackBarState.msg}</Alert>
      </Snackbar>
    </>
  );
}

export default NoticeSnackBar;
