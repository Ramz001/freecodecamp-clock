import { createSlice } from "@reduxjs/toolkit";
import {
  TimerStateTypes,
  TimerTypes,
  TimerStatus,
  SelectedColor,
  SelectedFont,
} from "./timer.types";
import {
  calculateTimeLeftReducer,
  changeSelectedColorReducer,
  changeSelectedFontReducer,
  changeTimerTypeReducer,
  toggleTimerStatusReducer,
  configureSettingsReducer,
  togglePopupReducer,
  repeatTimeLeftReducer,
  toggleVolumeReducer,
} from "./timer.reducers";

const initialState: TimerStateTypes = {
  isSettingsModalOpen: false,
  timerType: TimerTypes.pomodoro,
  timeLeft: 1500,
  pomodoroTimeLeft: 1500,
  shortBreakTimeLeft: 300,
  longBreakTimeLeft: 900,
  timerStatus: TimerStatus.paused,
  selectedFont: SelectedFont.serif,
  selectedColor: SelectedColor.red,
  volume: true,
  progress: 100,
};

const timer = createSlice({
  name: "timer",
  initialState,
  reducers: {
    togglePopup: togglePopupReducer,
    calculateTimeLeft: calculateTimeLeftReducer,
    changeTimerType: changeTimerTypeReducer,
    changeSelectedColor: changeSelectedColorReducer,
    changeSelectedFont: changeSelectedFontReducer,
    toggleTimerStatus: toggleTimerStatusReducer,
    configureSettings: configureSettingsReducer,
    repeatTimeLeft: repeatTimeLeftReducer,
    toggleVolume: toggleVolumeReducer,
  },
});

export const {
  togglePopup,
  changeTimerType,
  changeSelectedColor,
  changeSelectedFont,
  toggleTimerStatus,
  calculateTimeLeft,
  configureSettings,
  repeatTimeLeft,
  toggleVolume,
} = timer.actions;

export default timer.reducer;
