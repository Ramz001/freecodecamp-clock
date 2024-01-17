import { useEffect, useState } from "react";
import {
  useAppSelector,
  useAppDispatch,
} from "../../features/timer/timer.hooks";
import {
  toggleTimerStatus,
  calculateTimeLeft,
} from "../../features/timer/timer.slice";
import { TimerStatus } from "../../features/timer/timer.types";

const MainClock = () => {
  const dispatch = useAppDispatch();
  const { timeLeft, timerStatus } = useAppSelector((store) => store.timer);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft - minutes * 60;
  
  useEffect(() => {
    const interval = setInterval(() => {
      if(timerStatus === TimerStatus.resumed && timeLeft > 0) {
        dispatch(calculateTimeLeft());
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft, timerStatus]);

  const handleTimerBtn = () => {
    if (timerStatus === TimerStatus.paused) {
      dispatch(toggleTimerStatus(TimerStatus.resumed));
    } else {
      dispatch(toggleTimerStatus(TimerStatus.paused));
    }
  };

  return (
    <div
      className="xl:w-96 xl:h-96 relative text-blue-200 mx-auto rounded-full 
    shadow-2xl"
    >
      <div
        className="flex relative flex-col justify-center items-center h-full 
      gap-y-5 bg-indigo-950 rounded-full shadow-inner"
      >
        <span className="text-8xl font-bold">
          {minutes < 10 ? "0" + minutes : minutes}:
          {seconds < 10 ? "0" + seconds : seconds}
        </span>
        <button
          className="font-semibold text-lg tracking-[1rem] mx-auto uppercase pl-4"
          onClick={handleTimerBtn}
        >
          {timerStatus === TimerStatus.paused ? "resume" : "pause"}
        </button>
      </div>
    </div>
  );
};

export default MainClock;
