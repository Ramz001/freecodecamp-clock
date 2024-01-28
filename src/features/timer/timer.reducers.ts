import {
  SelectedColor,
  SelectedFont,
  TimerStateTypes,
  TimerStatus,
  TimerTypes,
  SettingsType,
} from "./timer.types";
import { PayloadAction } from "@reduxjs/toolkit";

export const changeTimerTypeReducer = (
  state: TimerStateTypes,
  action: PayloadAction<TimerTypes>
) => {
  const buttonType = action.payload;

  if (buttonType === TimerTypes.pomodoro) {
    state.timerType = TimerTypes.pomodoro;
    state.timeLeft = state.pomodoroTimeLeft;
  }
  if (buttonType === TimerTypes.shortBreak) {
    state.timerType = TimerTypes.shortBreak;
    state.timeLeft = state.shortBreakTimeLeft;
  }
  if (buttonType === TimerTypes.longBreak) {
    state.timerType = TimerTypes.longBreak;
    state.timeLeft = state.longBreakTimeLeft;
  }
};

export const changeSelectedFontReducer = (
  state: TimerStateTypes,
  action: PayloadAction<SelectedFont>
) => {
  const fontType = action.payload;

  if (fontType === SelectedFont.roboto) {
    state.selectedFont = SelectedFont.roboto;
  }
  if (fontType === SelectedFont.playfair) {
    state.selectedFont = SelectedFont.playfair;
  }
  if (fontType === SelectedFont.serif) {
    state.selectedFont = SelectedFont.serif;
  }
};

export const changeSelectedColorReducer = (
  state: TimerStateTypes,
  action: PayloadAction<SelectedColor>
) => {
  const colorToChange = action.payload;

  if (colorToChange === SelectedColor.red) {
    state.selectedColor = SelectedColor.red;
  }
  if (colorToChange === SelectedColor.blue) {
    state.selectedColor = SelectedColor.blue;
  }
  if (colorToChange === SelectedColor.purple) {
    state.selectedColor = SelectedColor.purple;
  }
};

export const configureSettingsReducer = (
  state: TimerStateTypes,
  action: PayloadAction<SettingsType>
) => {
  const {
    pomodoroTimeLeft,
    shortBreakTimeLeft,
    longBreakTimeLeft,
    selectedFont,
    selectedColor,
  } = action.payload;

  state.pomodoroTimeLeft = pomodoroTimeLeft;
  state.shortBreakTimeLeft = shortBreakTimeLeft;
  state.longBreakTimeLeft = longBreakTimeLeft;
  state.selectedColor = selectedColor;
  state.selectedFont = selectedFont;
};

export const toggleTimerStatusReducer = (
  state: TimerStateTypes,
  action: PayloadAction<TimerStatus>
) => {
  state.timerStatus = action.payload;
};

export const calculateTimeLeftReducer = (state: TimerStateTypes) => {
  if (state.timerStatus === TimerStatus.resumed) {
    state.timeLeft = state.timeLeft - 1;
  }
};

export const repeatTimeLeftReducer = (state: TimerStateTypes) => {
  if (state.timerType === TimerTypes.pomodoro) {
    state.timeLeft = state.pomodoroTimeLeft;
  }
  if (state.timerType === TimerTypes.shortBreak) {
    state.timeLeft = state.shortBreakTimeLeft;
  }
  if (state.timerType === TimerTypes.longBreak) {
    state.timeLeft = state.longBreakTimeLeft;
  }
};

export const togglePopupReducer = (state: TimerStateTypes) => {
  state.isSettingsModalOpen = !state.isSettingsModalOpen;
};
