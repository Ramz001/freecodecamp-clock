import Backdrop from "../Backdrop/Backdrop.component";
import XMarkSolid from "../../assets/icons/xmark-solid.svg";
import CheckSolid from "../../assets/icons/check-solid.svg";
import AngleUpSolid from "../../assets/icons/angle-up-solid.svg";
import AngleDownSolid from "../../assets/icons/angle-down-solid.svg";

import {
  useAppDispatch,
  useAppSelector,
} from "../../features/timer/timer.hooks";
import {
  togglePopup,
  configureSettings,
  toggleVolume,
} from "../../features/timer/timer.slice";
import {
  TimerTypes,
  SelectedColor,
  SelectedFont,
} from "../../features/timer/timer.types";
import { useState, FC, ChangeEvent } from "react";

type SettingsPopupTypes = {
  handlePopup: () => void;
};

const SettingsPopup: FC<SettingsPopupTypes> = ({ handlePopup }) => {
  const {
    selectedColor,
    selectedFont,
    pomodoroTimeLeft,
    shortBreakTimeLeft,
    longBreakTimeLeft,
    volume,
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
    if (type === operationType.increment) {
      if (input === inputType.pomodoro) {
        setSettings({
          ...settings,
          pomodoroTimeLeft: (settings.pomodoroTimeLeft += 60),
        });
      }
      if (input === inputType.shortBreak) {
        setSettings({
          ...settings,
          shortBreakTimeLeft: (settings.shortBreakTimeLeft += 60),
        });
      }
      if (input === inputType.longBreak) {
        setSettings({
          ...settings,
          longBreakTimeLeft: (settings.longBreakTimeLeft += 60),
        });
      }
    }
    if (type === operationType.decrement) {
      if (input === inputType.pomodoro && settings.pomodoroTimeLeft > 600) {
        setSettings({
          ...settings,
          pomodoroTimeLeft: (settings.pomodoroTimeLeft -= 60),
        });
      }
      if (input === inputType.longBreak && settings.longBreakTimeLeft > 300) {
        setSettings({
          ...settings,
          longBreakTimeLeft: (settings.longBreakTimeLeft -= 60),
        });
      }
      if (input === inputType.shortBreak && settings.shortBreakTimeLeft > 60) {
        setSettings({
          ...settings,
          shortBreakTimeLeft: (settings.shortBreakTimeLeft -= 60),
        });
      }
    }
  };

  const handleSettings = () => {
    dispatch(configureSettings(settings));
    dispatch(togglePopup());
  };

  const handleInputBtns = (
    e: ChangeEvent<HTMLInputElement>,
    type: TimerTypes
  ) => {
    const value = e.currentTarget.value;
    if (Number(value) < 100 && Number(value) > -1) {
      if (type === TimerTypes.pomodoro) {
        setSettings({ ...settings, pomodoroTimeLeft: Number(value) * 60 });
      }
      if (type === TimerTypes.shortBreak) {
        setSettings({ ...settings, shortBreakTimeLeft: Number(value) * 60 });
      }
      if (type === TimerTypes.longBreak) {
        setSettings({ ...settings, longBreakTimeLeft: Number(value) * 60 });
      }
    }
  };

  return (
    <Backdrop onClick={handlePopup}>
      <div
        className="settings-popup-container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between h-16 border-b border-gray-500">
          <h3 className="text-2xl font-bold sm:text-3xl">Settings</h3>
          <img
            src={XMarkSolid}
            alt="x mark icon"
            className="w-6 h-6 cursor-pointer"
            onClick={handlePopup}
          />
        </div>
        <div className="my-6">
          <h4 className="mb-4 settings-title">Time(minutes)</h4>
          <div className="settings-input-btns-container">
            <div className="relative flex flex-col items-start justify-center">
              <label htmlFor={TimerTypes.pomodoro}>pomodoro</label>
              <input
                type="number"
                id={TimerTypes.pomodoro}
                className="w-[17rem] xs:w-72 sm:w-32 md:w-36 h-12 xs:h-14 sm:h-10 md:h-12 
                rounded-xl bg-gray-200 py-2 px-3 text-gray-900 cursor-default"
                value={Math.floor(settings.pomodoroTimeLeft / 60)}
                onChange={(e) => handleInputBtns(e, TimerTypes.pomodoro)}
                data-testid={TimerTypes.pomodoro}
              />
              <div className="settings-input-btns">
                <img
                  src={AngleUpSolid}
                  alt="angle down icon"
                  className="w-4 h-4 cursor-pointer"
                  onClick={() =>
                    handleInputs(operationType.increment, inputType.pomodoro)
                  }
                />
                <img
                  src={AngleDownSolid}
                  alt="angle down icon"
                  className="w-4 h-4 cursor-pointer"
                  onClick={() =>
                    handleInputs(operationType.decrement, inputType.pomodoro)
                  }
                />
              </div>
            </div>
            <div className="relative flex flex-col items-start justify-center">
              <label htmlFor={TimerTypes.shortBreak}>short break</label>
              <input
                type="number"
                id={TimerTypes.shortBreak}
                className="w-[17rem] xs:w-72 sm:w-32 md:w-36 h-12 xs:h-14 sm:h-10 md:h-12 
                rounded-xl bg-gray-200 py-2 px-3 text-gray-900 cursor-default"
                value={Math.floor(settings.shortBreakTimeLeft / 60)}
                onChange={(e) => handleInputBtns(e, TimerTypes.shortBreak)}
                data-testid={TimerTypes.shortBreak}
              />
              <div className="settings-input-btns">
                <img
                  src={AngleUpSolid}
                  alt="angle down icon"
                  className="w-4 h-4 cursor-pointer"
                  onClick={() =>
                    handleInputs(operationType.increment, inputType.shortBreak)
                  }
                />
                <img
                  src={AngleDownSolid}
                  alt="angle down icon"
                  className="w-4 h-4 cursor-pointer"
                  onClick={() =>
                    handleInputs(operationType.decrement, inputType.shortBreak)
                  }
                />
              </div>
            </div>
            <div className="relative flex flex-col items-start justify-center">
              <label htmlFor={TimerTypes.longBreak}>long break</label>
              <input
                type="number"
                id={TimerTypes.longBreak}
                className="w-[17rem] xs:w-72 sm:w-32 md:w-36 h-12 xs:h-14 sm:h-10 md:h-12 
                rounded-xl bg-gray-200 py-2 px-3 text-gray-900 cursor-default"
                value={Math.floor(settings.longBreakTimeLeft / 60)}
                onChange={(e) => handleInputBtns(e, TimerTypes.longBreak)}
                data-testid={TimerTypes.longBreak}
              />
              <div className="settings-input-btns">
                <img
                  src={AngleUpSolid}
                  alt="angle down icon"
                  className="w-4 h-4 cursor-pointer"
                  onClick={() =>
                    handleInputs(operationType.increment, inputType.longBreak)
                  }
                />
                <img
                  src={AngleDownSolid}
                  alt="angle down icon"
                  className="w-4 h-4 cursor-pointer"
                  onClick={() =>
                    handleInputs(operationType.decrement, inputType.longBreak)
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between pb-6 border-b border-gray-500">
          <h2 className={`settings-title`}>Sounds</h2>
          <div className="flex gap-3">
            <button
              className={`outline-1 outline rounded-xl px-4 py-1 outline-black ${
                volume && `${selectedColor} text-white`
              }`}
              onClick={() => dispatch(toggleVolume())}
            >
              On
            </button>
            <button
              className={`outline-1 outline rounded-xl px-4 py-1 outline-black ${
                !volume && `${selectedColor} text-white`
              }`}
              onClick={() => dispatch(toggleVolume())}
            >
              Off
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between py-6 border-b border-gray-500">
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
        <div className="flex items-center justify-between">
          <h4 className="py-6 settings-title">Color</h4>
          <div className="flex gap-4">
            <span
              onClick={() => handleColorBtn(SelectedColor.red)}
              className={`${SelectedColor.red} select-color-btn`}
            >
              {settings.selectedColor === SelectedColor.red && (
                <img src={CheckSolid} alt="check icon" className="w-4 h-4" />
              )}
            </span>
            <span
              onClick={() => handleColorBtn(SelectedColor.purple)}
              className={`${SelectedColor.purple} select-color-btn`}
            >
              {settings.selectedColor === SelectedColor.purple && (
                <img src={CheckSolid} alt="check icon" className="w-4 h-4" />
              )}
            </span>
            <span
              onClick={() => handleColorBtn(SelectedColor.blue)}
              className={`${SelectedColor.blue} select-color-btn`}
            >
              {settings.selectedColor === SelectedColor.blue && (
                <img src={CheckSolid} alt="check icon" className="w-4 h-4" />
              )}
            </span>
          </div>
        </div>
        <button
          className={`${selectedColor} text-white font-semibold font-lg py-3 px-10 
          rounded-xl absolute -bottom-5 right-0 mx-auto left-0 w-32 flex justify-center 
          items-center shadow-md`}
          onClick={handleSettings}
        >
          Apply
        </button>
      </div>
    </Backdrop>
  );
};

export default SettingsPopup;
