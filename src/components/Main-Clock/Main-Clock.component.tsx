import { useEffect, useState, useMemo } from "react";
import {
  useAppSelector,
  useAppDispatch,
} from "../../features/timer/timer.hooks";
import {
  toggleTimerStatus,
  calculateTimeLeft,
  repeatTimeLeft,
} from "../../features/timer/timer.slice";
import { TimerStatus, SelectedColor } from "../../features/timer/timer.types";
import StartSound from "../../assets/sounds/start.wav";
import StopSound from "../../assets/sounds/stop.wav";
import TimeUpSound from "../../assets/sounds/time-up.wav";
import { useTimer } from "react-use-precision-timer";

const MainClock = () => {
  const dispatch = useAppDispatch();
  const { timeLeft, timerStatus, selectedColor, volume, progress } =
    useAppSelector((store) => store.timer);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const start = new Audio(StartSound);
  const timeUp = useMemo(() => new Audio(TimeUpSound), []);
  const stop = new Audio(StopSound);

  let timerTitle = "";

  let radius = 185;
  let barRadius = 161;
  let strokeWidth = 12;
  let strokeColor = "";

  let circumference = barRadius * 2 * Math.PI;
  let strokeDashOffset = circumference - (progress / 100) * circumference;

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft - minutes * 60;

  const changeWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  const handleTimer = () => {
    dispatch(calculateTimeLeft(timeLeft - 1));
  };

  const timer = useTimer({ delay: 1000 }, handleTimer);

  useEffect(() => {
    if (timeLeft === 0) {
      timeUp.play();
      timer.pause();
    }
    if (timerStatus === TimerStatus.resumed && timeLeft > 0) {
      timer.start();
      timer.resume();
    }
  }, [timeLeft, timer, timerStatus, timeUp]);

  useEffect(() => {
    window.addEventListener("resize", changeWindowWidth);

    return () => {
      window.removeEventListener("resize", changeWindowWidth);
    };
  }, []);

  if (windowWidth < 1280) {
    radius = 140;
    barRadius = 120;
    circumference = barRadius * 2 * Math.PI;
    strokeDashOffset = circumference - (progress / 100) * circumference;
  }
  if (windowWidth < 768) {
    radius = 130;
    barRadius = 110;
    strokeWidth = 11;
    circumference = barRadius * 2 * Math.PI;
    strokeDashOffset = circumference - (progress / 100) * circumference;
  }
  if (windowWidth < 640) {
    radius = 120;
    barRadius = 105;
    strokeWidth = 10;
    circumference = barRadius * 2 * Math.PI;
    strokeDashOffset = circumference - (progress / 100) * circumference;
  }
  if (windowWidth < 375) {
    radius = 112;
    barRadius = 95;
    strokeWidth = 10;
    circumference = barRadius * 2 * Math.PI;
    strokeDashOffset = circumference - (progress / 100) * circumference;
  }

  if (selectedColor === SelectedColor.red) {
    strokeColor = "rgb(244 63 94)";
  }
  if (selectedColor === SelectedColor.blue) {
    strokeColor = "rgb(59 130 246)";
  }
  if (selectedColor === SelectedColor.purple) {
    strokeColor = "rgb(168 85 247)";
  }

  if (timerStatus === TimerStatus.paused) {
    timerTitle = "resume";
  } else if (timeLeft === 0) {
    timerTitle = "repeat";
  } else {
    timerTitle = "pause";
  }

  const handleTimerBtn = () => {
    if (timerStatus === TimerStatus.paused) {
      volume && start.play();
      dispatch(toggleTimerStatus(TimerStatus.resumed));
    }
    if (timerStatus === TimerStatus.resumed) {
      volume && stop.play();
      dispatch(toggleTimerStatus(TimerStatus.paused));
    }
    if (timeLeft === 0 && timerStatus === TimerStatus.resumed) {
      volume && start.play();
      dispatch(toggleTimerStatus(TimerStatus.resumed));
      dispatch(repeatTimeLeft());
    }
  };
  return (
    <div className="xl:w-[26rem] xl:h-[26rem] md:h-80 md:w-80 sm:w-72 sm:h-72 xs:w-[17rem] xs:h-[17rem] w-64 h-64 relative text-blue-200 mx-auto rounded-full shadow-2xl">
      <div className="w-full h-full p-4 rounded-full bg-gradient-to-br from-indigo-950 to-indigo-900 md:p-5 xl:p-6 timer-outer-circle-shadow">
        <div className="relative flex flex-col items-center justify-center h-full rounded-full gap-y-5 bg-indigo-950">
          <span className="z-10 text-6xl font-bold md:text-7xl lg:text-7xl xl:text-8xl">
            {minutes < 10 ? "0" + minutes : minutes}:
            {seconds < 10 ? "0" + seconds : seconds}
          </span>
          <button
            className="font-semibold text-sm sm:text-base md:text-lg 
            tracking-[1rem] mx-auto uppercase pl-4 hover:opacity-80 z-10"
            onClick={handleTimerBtn}
          >
            {timerTitle}
          </button>
          <svg className="absolute w-full h-full p-0 origin-center -rotate-90 rounded-full bg-indigo-950 ">
            <circle
              fill="transparent"
              strokeWidth={strokeWidth}
              strokeDasharray={`${circumference} ${circumference}`}
              strokeDashoffset={strokeDashOffset}
              r={barRadius}
              cx={radius}
              cy={radius}
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
