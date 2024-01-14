import { useAppSelector, useAppDispatch } from "../../features/timer/timer.hooks";
import { TimerTypes } from "../../features/timer/timer.types";
import { changeTimerType } from "../../features/timer/timer.slice";

const Options = () => {
  const { selectedColor, timerType } = useAppSelector((store) => store.timer);
  const dispatch = useAppDispatch()

  const activeButtonStyles = `${selectedColor}  text-blue-950`;

  const handleButtons = (buttonType: TimerTypes) => {
    dispatch(changeTimerType(buttonType))
  }

  return (
    <div
      className="bg-indigo-950 flex px-3 py-2 gap-2 rounded-full mx-auto 
    justify-center items-center text-gray-300 text-lg font-sans relative font-medium"
    >
      <button
        className={`${
          timerType === TimerTypes.pomodoro ? activeButtonStyles : ""
        } options-btn`}
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
