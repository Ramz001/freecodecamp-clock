import { FC, ReactNode } from "react";

export type BackdropTypes = {
  children: ReactNode;
  onClick: () => void;
};

const Backdrop: FC<BackdropTypes> = ({ children, onClick }) => {
  return (
    <div
      className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-15"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Backdrop;
