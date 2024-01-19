import { useEffect } from "react";
import {
  useAppSelector,
  useAppDispatch,
} from "../../features/timer/timer.hooks";
import {
  toggleTimerStatus,
  calculateTimeLeft,
} from "../../features/timer/timer.slice";
import { TimerStatus, SelectedColor } from "../../features/timer/timer.types";

const MainClock = () => {
  const dispatch = useAppDispatch();
  const { timeLeft, timerStatus, selectedColor } = useAppSelector(
    (store) => store.timer
  );

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft - minutes * 60;

  useEffect(() => {
    const interval = setInterval(() => {
      if (timerStatus === TimerStatus.resumed && timeLeft > 0) {
        dispatch(calculateTimeLeft());
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft, timerStatus, dispatch]);

  const handleTimerBtn = () => {
    if (timerStatus === TimerStatus.paused) {
      dispatch(toggleTimerStatus(TimerStatus.resumed));
    } else {
      dispatch(toggleTimerStatus(TimerStatus.paused));
    }
  };

  let strokeColor = "";

  if (selectedColor === SelectedColor.red) {
    strokeColor = "rgb(239 68 68)";
  }
  if (selectedColor === SelectedColor.blue) {
    strokeColor = "rgb(59 130 246)";
  }
  if (selectedColor === SelectedColor.purple) {
    strokeColor = "rgb(168 85 247)";
  }

  return (
    <div
      className="xl:w-[26rem] xl:h-[26rem] md:h-80 md:w-80 sm:w-72 sm:h-72 w-64 h-64 relative 
      text-blue-200 mx-auto rounded-full shadow-2xl"
    >
      <div
        className="w-full h-full rounded-full bg-gradient-to-br from-indigo-950 
    to-indigo-900 p-6 timer-outer-circle-shadow"
      >
        <div
          className="flex relative flex-col justify-center items-center h-full gap-y-5
         bg-indigo-950 rounded-full p-2"
        >
          <span className="text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-bold z-10">
            {minutes < 10 ? "0" + minutes : minutes}:
            {seconds < 10 ? "0" + seconds : seconds}
          </span>
          <button
            className="font-semibold text-sm sm:text-base md:text-lg 
            tracking-[1rem] mx-auto uppercase pl-4 hover:opacity-80 z-10"
            onClick={handleTimerBtn}
          >
            {timerStatus === TimerStatus.paused ? "resume" : "pause"}
          </button>
          <svg className="absolute bg-indigo-950 w-full h-full rounded-full origin-center rotate-[270deg]">
            {/* <circle
              color="rgb(30 27 75)"
              cx="170" 
              cy="170" 
              r="140"
              stroke-width="3" 
              fill="red"
              strokeLinecap="round"
              strokeDashoffset={0}
              strokeDasharray={`12 12`}
            /> */}
            <circle
              fill="transparent"
              strokeWidth={12}
              strokeDasharray={`${10} ${0}`}
              strokeDashoffset={20}
              r={160}
              cx={186}
              cy={178}
              strokeLinecap="round"
              stroke={strokeColor}
            ></circle>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MainClock;
