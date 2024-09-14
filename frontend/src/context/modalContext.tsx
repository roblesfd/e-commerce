import { createContext } from "react";

interface ModalState {
  isOpen: boolean;
  content: React.ReactNode | null;
}

interface ModalContextProps {
  modal: ModalState;
  setModal: React.Dispatch<React.SetStateAction<ModalState>>;
}

const ModalContext = createContext<ModalContextProps>({
  modal: {
    isOpen: false,
    content: "",
  },
  setModal: () => null,
});

export default ModalContext;
