const MainClock = () => {
  return (
    <div className="xl:w-96 xl:h-96  text-blue-200 mx-auto rounded-full 
    shadow-2xl">
      <div className="flex relative flex-col justify-center items-center h-full 
      gap-y-4 bg-indigo-950 rounded-full shadow-inner">
        <span className="text-8xl font-bold">17:59</span>
        <button className="font-semibold text-xl tracking-[1rem] mx-auto uppercase w-32">
          pause
        </button>
      </div>
    </div>
  );
};

export default MainClock;
