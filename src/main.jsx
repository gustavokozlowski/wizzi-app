import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ModalProvider } from "styled-react-modal";
import { FadingBackground } from "./components/modal/styles.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ModalProvider backgroundComponent={FadingBackground}>
      <App />
    </ModalProvider>
  </React.StrictMode>
);
