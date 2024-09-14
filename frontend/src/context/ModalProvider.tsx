import { useState } from "react";
import ModalContext from "./modalContext";
import Modal from "../components/Modal";

interface ModalProviderProps {
  children: React.ReactNode;
}

interface ModalState {
  isOpen: boolean;
  content: React.ReactNode | null;
}

const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [modal, setModal] = useState<ModalState>({
    isOpen: false,
    content: null,
  });

  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      <Modal />
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
