import GearSolid from "../../assets/icons/gear-solid.svg";
import XMarkSolid from "../../assets/icons/xmark-solid.svg";
import CheckSolid from "../../assets/icons/check-solid.svg";
import {
  useAppDispatch,
  useAppSelector,
} from "../../features/timer/timer.hooks";
import { togglePopup } from "../../features/timer/timer.slice";
import { TimerTypes, SelectedColor } from "../../features/timer/timer.types";

const SettingsPopup = () => {
  const {
    isSettingsModalOpen,
    selectedColor,
    selectedFont,
    pomodoroTimeLeft,
    shortBreakTimeLeft,
    longBreakTimeLeft,
  } = useAppSelector((store) => store.timer);
  const dispatch = useAppDispatch();

  const handlePopup = () => {
    dispatch(togglePopup());
  };

  return (
    <div className="flex justify-center items-center mx-auto">
      <img
        src={GearSolid}
        alt="gear icon"
        className="w-8 h-8 cursor-pointer shadow-sm "
        onClick={handlePopup}
      />

      {isSettingsModalOpen && (
        <div className="absolute bg-black bg-opacity-15 w-full h-full top-0 flex justify-center items-center">
          <div className="bg-gray-100 px-6 pb-6 pt-3 opacity-100 rounded-2xl text-gray-800 z-10 relative">
            <div className="flex items-center border-b border-gray-500 justify-between h-16">
              <h3 className="text-3xl font-bold">Settings</h3>
              <img
                src={XMarkSolid}
                alt="x mark icon"
                className="w-6 h-6 cursor-pointer"
                onClick={handlePopup}
              />
            </div>
            <div className="my-4">
              <h4 className="text-lg font-semibold mb-4 tracking-[.4rem]">
                Time(minutes)
              </h4>
              <div
                className="flex gap-1 text-sm tracking-wide font-bold 
            text-gray-700 border-b border-gray-500 pb-4"
              >
                <div className="flex-col flex justify-center items-start">
                  <label htmlFor={TimerTypes.pomodoro}>pomodoro</label>
                  <input
                    type="number"
                    id={TimerTypes.pomodoro}
                    className="xl:w-36 h-12 rounded-xl bg-gray-200 py-2 px-3"
                    value={pomodoroTimeLeft}
                  />
                </div>
                <div className="flex flex-col justify-center items-start">
                  <label htmlFor={TimerTypes.shortBreak}>short break</label>
                  <input
                    type="number"
                    id={TimerTypes.shortBreak}
                    className="xl:w-36 h-12 rounded-xl bg-gray-200 py-2 px-3"
                    value={shortBreakTimeLeft}
                  />
                </div>
                <div className="flex flex-col justify-center items-start">
                  <label htmlFor={TimerTypes.longBreak}>long break</label>
                  <input
                    type="number"
                    id={TimerTypes.longBreak}
                    className="xl:w-36 h-12 rounded-xl bg-gray-200 py-2 px-3"
                    value={longBreakTimeLeft}
                  />
                </div>
              </div>
            </div>
            <div
              className="flex justify-between items-center border-b 
          border-gray-500 pb-4"
            >
              <h4 className="text-lg font-semibold">Font</h4>
              <div className="flex gap-4">
                <button className="bg-gray-200 w-9 h-9 rounded-full">Aa</button>
                <button className="bg-gray-200 w-8 h-8 rounded-full">Aa</button>
                <button className="bg-gray-200 w-8 h-8 rounded-full">Aa</button>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-semibold py-4 ">Color</h4>
              <div className="flex gap-4">
                <span
                  className={`${SelectedColor.red} w-8 h-8 rounded-full cursor-pointer`}
                ></span>
                <span
                  className={`${SelectedColor.purple} w-8 h-8 rounded-full cursor-pointer`}
                ></span>
                <span
                  className={`${SelectedColor.blue} w-8 h-8 rounded-full cursor-pointer`}
                ></span>
              </div>
            </div>
            <button
              className={`${selectedColor} text-gray-100 font-semibold font-lg 
              py-2 px-8 rounded-xl absolute -bottom-5 right-0 mx-auto left-0 w-32
              flex justify-center items-center`}
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsPopup;
