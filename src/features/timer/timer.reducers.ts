import { SelectedColor, TimerStateTypes, TimerTypes } from "./timer.types";
import { PayloadAction } from "@reduxjs/toolkit";

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

export const changeTimerTypeReducer = (
  state: TimerStateTypes,
  action: PayloadAction<TimerTypes>
) => {
  const buttonType = action.payload;

  if (buttonType === TimerTypes.pomodoro) {
    state.timerType = TimerTypes.pomodoro;
  }
  if (buttonType === TimerTypes.shortBreak) {
    state.timerType = TimerTypes.shortBreak;
  }
  if (buttonType === TimerTypes.longBreak) {
    state.timerType = TimerTypes.longBreak;
  }
};
