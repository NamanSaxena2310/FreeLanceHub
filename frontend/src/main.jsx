import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import PromptContextProvider from "./context/PromptContext.jsx";

createRoot(document.getElementById("root")).render(
  <PromptContextProvider>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </PromptContextProvider>
);
