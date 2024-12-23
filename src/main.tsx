/**
 * Main Entry Point
 * - Mounts the React application and wraps it with global providers.
 */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Providers from "./app/Providers/Providers";
import App from "./app/App/App";

const root: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
);
