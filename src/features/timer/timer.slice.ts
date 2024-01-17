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
  configureSettingsReducer
} from "./timer.reducers";

const initialState: TimerStateTypes = {
  isSettingsModalOpen: false,
  timerType: TimerTypes.pomodoro,
  timeLeft: 1500,
  pomodoroTimeLeft: 1500,
  shortBreakTimeLeft: 300,
  longBreakTimeLeft: 900,
  timerStatus: TimerStatus.paused,
  selectedFont: SelectedFont.roboto,
  selectedColor: SelectedColor.red,
};

const timer = createSlice({
  name: "timer",
  initialState,
  reducers: {
    togglePopup: (state) => {
      state.isSettingsModalOpen = !state.isSettingsModalOpen;
    },
    calculateTimeLeft: calculateTimeLeftReducer,
    changeTimerType: changeTimerTypeReducer,
    changeSelectedColor: changeSelectedColorReducer,
    changeSelectedFont: changeSelectedFontReducer,
    toggleTimerStatus: toggleTimerStatusReducer,
    configureSettings: configureSettingsReducer
  },
});

export const {
  togglePopup,
  changeTimerType,
  changeSelectedColor,
  changeSelectedFont,
  toggleTimerStatus,
  calculateTimeLeft,
  configureSettings
} = timer.actions;

export default timer.reducer;
