import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";

import "./index.css";
import SidebarProvider from "./context/SidebarProvider.tsx";
import ModalProvider from "./context/ModalProvider.tsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SidebarProvider>
      <ModalProvider>
        <Toaster />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ModalProvider>
    </SidebarProvider>
  </StrictMode>
);
