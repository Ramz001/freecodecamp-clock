const Backdrop = ({ children, onClick }: any) => {
  return (
    <div
      className="absolute bg-black bg-opacity-15 w-full h-full top-0 left-0 flex justify-center items-center"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Backdrop;
