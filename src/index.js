import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./Root";
import { CssBaseline } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CssBaseline />
    <Root />
  </React.StrictMode>
);
