import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  TimerStateTypes,
  TimerTypes,
  TimerStatus,
  SelectedColor,
} from "./timer.types";
import { changeSelectedColorReducer, changeTimerTypeReducer } from "./timer.reducers";


const initialState: TimerStateTypes = {
  isSettingsModalOpen: false,
  timerType: TimerTypes.pomodoro,
  timeLeft: 0,
  pomodoroTimeLeft: 25,
  shortBreakTimeLeft: 5,
  longBreakTimeLeft: 15,
  timerStatus: TimerStatus.paused,
  selectedFont: "",
  selectedColor: SelectedColor.red,
};

const timer = createSlice({
  name: "timer",
  initialState,
  reducers: {
    togglePopup: (state) => {
      state.isSettingsModalOpen = !state.isSettingsModalOpen
    },
    changeTimerType: changeTimerTypeReducer,
    changeSelectedColor: changeSelectedColorReducer,
    
  },
});

export const { togglePopup, changeTimerType, changeSelectedColor } = timer.actions

export default timer.reducer;
