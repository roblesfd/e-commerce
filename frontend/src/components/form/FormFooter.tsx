import { ReactNode } from "react";

export interface FormFooterProps {
  children: ReactNode;
}

const FormFooter: React.FC<FormFooterProps> = ({ children }) => {
  return (
    <div>
      <div className="flex items-center justify-between mt-8">{children}</div>
    </div>
  );
};

export default FormFooter;
