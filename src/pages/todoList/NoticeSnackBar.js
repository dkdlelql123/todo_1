import { Snackbar, Alert } from "@mui/material";

function NoticeSnackBar({ snackBarState }) {
  console.log(snackBarState);
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
