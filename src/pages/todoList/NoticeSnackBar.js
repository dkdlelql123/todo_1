import { useRef, useState, useMemo } from "react";
import { Snackbar, Alert } from "@mui/material";

function NoticeSnackBar({ open, setOpen }) {
  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  );
}

export default NoticeSnackBar;
