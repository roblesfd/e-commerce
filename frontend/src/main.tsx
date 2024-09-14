import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";

import "./index.css";
import SidebarProvider from "./context/SidebarProvider.tsx";
import ModalProvider from "./context/ModalProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SidebarProvider>
      <ModalProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ModalProvider>
    </SidebarProvider>
  </StrictMode>
);
