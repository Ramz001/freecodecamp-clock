import GearSolid from "../../assets/icons/gear-solid.svg";
import XMarkSolid from "../../assets/icons/xmark-solid.svg";
import CheckSolid from "../../assets/icons/check-solid.svg";
import Backdrop from "../Backdrop/Backdrop.component";
import AngleUpSolid from "../../assets/icons/angle-up-solid.svg";
import AngleDownSolid from "../../assets/icons/angle-down-solid.svg";

import {
  useAppDispatch,
  useAppSelector,
} from "../../features/timer/timer.hooks";
import {
  togglePopup,
  configureSettings,
} from "../../features/timer/timer.slice";
import {
  TimerTypes,
  SelectedColor,
  SelectedFont,
} from "../../features/timer/timer.types";
import { useState } from "react";

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
  const activeFontStyles = "bg-gray-950 text-gray-100";
  const [settings, setSettings] = useState({
    pomodoroTimeLeft,
    shortBreakTimeLeft,
    longBreakTimeLeft,
    selectedFont,
    selectedColor,
  });

  enum inputType {
    pomodoro = "pomodoro",
    shortBreak = "short break",
    longBreak = "long break",
  }

  enum operationType {
    increment = "increment",
    decrement = "decrement",
  }

  const handlePopup = () => {
    dispatch(togglePopup());
  };

  const handleColorBtn = (color: SelectedColor) => {
    setSettings((settings) => {
      return { ...settings, selectedColor: color };
    });
  };

  const handleFontBtn = (font: SelectedFont) => {
    setSettings((settings) => {
      return { ...settings, selectedFont: font };
    });
  };

  const handleInputs = (type: operationType, input: inputType) => {
    if (type === "increment" && input === inputType.pomodoro) {
      setSettings({
        ...settings,
        pomodoroTimeLeft: (settings.pomodoroTimeLeft += 60),
      });
    } else if (type === "decrement" && input === inputType.pomodoro) {
      setSettings({
        ...settings,
        pomodoroTimeLeft: (settings.pomodoroTimeLeft -= 60),
      });
    }
    if (type === "increment" && input === inputType.shortBreak) {
      setSettings({
        ...settings,
        shortBreakTimeLeft: (settings.shortBreakTimeLeft += 60),
      });
    } else if (type === "decrement" && input === inputType.shortBreak) {
      setSettings({
        ...settings,
        shortBreakTimeLeft: (settings.shortBreakTimeLeft -= 60),
      });
    }
    if (type === "increment" && input === inputType.longBreak) {
      setSettings({
        ...settings,
        longBreakTimeLeft: (settings.longBreakTimeLeft += 60),
      });
    } else if (type === "decrement" && input === inputType.longBreak) {
      setSettings({
        ...settings,
        longBreakTimeLeft: (settings.longBreakTimeLeft -= 60),
      });
    }
  };

  const handleSettings = () => {
    dispatch(configureSettings(settings));
    dispatch(togglePopup());
  };

  return (
    <div className="flex justify-center items-center mx-auto">
      <img
        src={GearSolid}
        alt="gear icon"
        className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 cursor-pointer shadow"
        onClick={handlePopup}
      />

      {isSettingsModalOpen && (
        <Backdrop onClick={handlePopup}>
          <div
            className="bg-gray-100 px-8 sm:px-6 md:px-8 pb-8 pt-4 opacity-100 rounded-2xl text-gray-800 z-10 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center border-b border-gray-500 justify-between h-16">
              <h3 className="text-2xl sm:text-3xl font-bold">Settings</h3>
              <img
                src={XMarkSolid}
                alt="x mark icon"
                className="w-6 h-6 cursor-pointer"
                onClick={handlePopup}
              />
            </div>
            <div className="my-6">
              <h4 className="settings-title mb-4">Time(minutes)</h4>
              <div
                className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 text-xs tracking-wide font-normal 
                text-gray-500 sm:text-base border-b border-gray-500 pb-4"
              >
                <div className="flex-col flex justify-center items-start relative">
                  <label htmlFor={TimerTypes.pomodoro}>pomodoro</label>
                  <input
                    type="number"
                    id={TimerTypes.pomodoro}
                    className="w-56 sm:w-32 md:w-36 h-12 sm:h-10 md:h-12 rounded-xl 
                    bg-gray-200 py-2 px-3 text-gray-900"
                    value={Math.floor(settings.pomodoroTimeLeft / 60)}
                    readOnly
                  />
                  <div className="flex flex-col absolute right-3 sm:right-2 bottom-2 md:bottom-1 sm:bottom-2">
                    <img
                      src={AngleUpSolid}
                      alt="angle down icon"
                      className="w-4 h-4 cursor-pointer"
                      onClick={() =>
                        handleInputs(
                          operationType.increment,
                          inputType.pomodoro
                        )
                      }
                    />
                    <img
                      src={AngleDownSolid}
                      alt="angle down icon"
                      className="w-4 h-4 cursor-pointer"
                      onClick={() =>
                        handleInputs(
                          operationType.decrement,
                          inputType.pomodoro
                        )
                      }
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center items-start relative">
                  <label htmlFor={TimerTypes.shortBreak}>short break</label>
                  <input
                    type="number"
                    id={TimerTypes.shortBreak}
                    className="w-56 sm:w-32 md:w-36 h-12 sm:h-10 md:h-12 rounded-xl 
                    bg-gray-200 py-2 px-3 text-gray-900"
                    value={Math.floor(settings.shortBreakTimeLeft / 60)}
                    readOnly
                  />
                  <div className="flex flex-col absolute right-3 sm:right-2 bottom-2 md:bottom-1 sm:bottom-2">
                    <img
                      src={AngleUpSolid}
                      alt="angle down icon"
                      className="w-4 h-4 cursor-pointer"
                      onClick={() =>
                        handleInputs(
                          operationType.increment,
                          inputType.shortBreak
                        )
                      }
                    />
                    <img
                      src={AngleDownSolid}
                      alt="angle down icon"
                      className="w-4 h-4 cursor-pointer"
                      onClick={() =>
                        handleInputs(
                          operationType.decrement,
                          inputType.shortBreak
                        )
                      }
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center items-start relative">
                  <label htmlFor={TimerTypes.longBreak}>long break</label>
                  <input
                    type="number"
                    id={TimerTypes.longBreak}
                    className="w-56 sm:w-32 md:w-36 h-12 sm:h-10 md:h-12 rounded-xl 
                    bg-gray-200 py-2 px-3 text-gray-900"
                    value={Math.floor(settings.longBreakTimeLeft / 60)}
                    readOnly
                  />
                  <div className="flex flex-col absolute right-3 sm:right-2 bottom-2 md:bottom-1 sm:bottom-2">
                    <img
                      src={AngleUpSolid}
                      alt="angle down icon"
                      className="w-4 h-4 cursor-pointer"
                      onClick={() =>
                        handleInputs(
                          operationType.increment,
                          inputType.longBreak
                        )
                      }
                    />
                    <img
                      src={AngleDownSolid}
                      alt="angle down icon"
                      className="w-4 h-4 cursor-pointer"
                      onClick={() =>
                        handleInputs(
                          operationType.decrement,
                          inputType.longBreak
                        )
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center border-b border-gray-500 pb-6">
              <h4 className="settings-title">Font</h4>
              <div className="flex gap-4">
                <button
                  onClick={() => handleFontBtn(SelectedFont.roboto)}
                  className={`${
                    settings.selectedFont === SelectedFont.roboto
                      ? activeFontStyles
                      : ""
                  } ${SelectedFont.roboto} select-font-btn`}
                >
                  Aa
                </button>
                <button
                  onClick={() => handleFontBtn(SelectedFont.playfair)}
                  className={`${
                    settings.selectedFont === SelectedFont.playfair
                      ? activeFontStyles
                      : ""
                  } ${SelectedFont.playfair} select-font-btn`}
                >
                  Aa
                </button>
                <button
                  onClick={() => handleFontBtn(SelectedFont.serif)}
                  className={`${
                    settings.selectedFont === SelectedFont.serif
                      ? activeFontStyles
                      : ""
                  } ${SelectedFont.serif} select-font-btn`}
                >
                  Aa
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <h4 className="settings-title py-6">Color</h4>
              <div className="flex gap-4">
                <span
                  onClick={() => handleColorBtn(SelectedColor.red)}
                  className={`${SelectedColor.red} select-color-btn`}
                >
                  {settings.selectedColor === SelectedColor.red && (
                    <img
                      src={CheckSolid}
                      alt="check icon"
                      className="w-4 h-4"
                    />
                  )}
                </span>
                <span
                  onClick={() => handleColorBtn(SelectedColor.purple)}
                  className={`${SelectedColor.purple} select-color-btn`}
                >
                  {settings.selectedColor === SelectedColor.purple && (
                    <img
                      src={CheckSolid}
                      alt="check icon"
                      className="w-4 h-4"
                    />
                  )}
                </span>
                <span
                  onClick={() => handleColorBtn(SelectedColor.blue)}
                  className={`${SelectedColor.blue} select-color-btn`}
                >
                  {settings.selectedColor === SelectedColor.blue && (
                    <img
                      src={CheckSolid}
                      alt="check icon"
                      className="w-4 h-4"
                    />
                  )}
                </span>
              </div>
            </div>
            <button
              className={`${selectedColor} text-gray-100 font-semibold font-lg 
              py-3 px-10 rounded-xl absolute -bottom-5 right-0 mx-auto left-0 w-32
              flex justify-center items-center`}
              onClick={handleSettings}
            >
              Apply
            </button>
          </div>
        </Backdrop>
      )}
    </div>
  );
};

export default SettingsPopup;
