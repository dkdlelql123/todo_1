import { useRef, useState, useMemo } from "react";
import { Snackbar, Alert } from "@mui/material";

function NoticeSnackBar({ snackBarState }) {
  return (
    <>
      <Snackbar
        open={snackBarState.open}
        autoHideDuration={snackBarState.autoHideDuration}
        onClose={snackBarState.onClose}
      >
        <Alert
          onClose={snackBarState.onClose}
          severity={snackBarState.severity}
        >
          {snackBarState.msg}
        </Alert>
      </Snackbar>
    </>
  );
}

export default NoticeSnackBar;
