import {
  useAppSelector,
  useAppDispatch,
} from "../../features/timer/timer.hooks";
import { TimerTypes } from "../../features/timer/timer.types";
import { changeTimerType } from "../../features/timer/timer.slice";

const Options = () => {
  const { selectedColor, timerType } = useAppSelector((store) => store.timer);
  const dispatch = useAppDispatch();

  const activeButtonStyles = `${selectedColor} text-slate-950 hover:text-slate-900`;

  const handleButtons = (buttonType: TimerTypes) => {
    dispatch(changeTimerType(buttonType));
  };

  return (
    <div
      className="relative flex items-center justify-center gap-2 px-3 py-2 mx-auto font-sans text-lg 
      font-medium text-gray-300 rounded-full bg-indigo-950"
    >
      <button
        className={`${
          timerType === TimerTypes.pomodoro ? activeButtonStyles : ""
        } options-btn `}
        onClick={() => handleButtons(TimerTypes.pomodoro)}
      >
        pomodoro
      </button>
      <button
        className={`${
          timerType === TimerTypes.shortBreak ? activeButtonStyles : ""
        } options-btn`}
        onClick={() => handleButtons(TimerTypes.shortBreak)}
      >
        short break
      </button>
      <button
        className={`${
          timerType === TimerTypes.longBreak ? activeButtonStyles : ""
        } options-btn`}
        onClick={() => handleButtons(TimerTypes.longBreak)}
      >
        long break
      </button>
    </div>
  );
};

export default Options;
