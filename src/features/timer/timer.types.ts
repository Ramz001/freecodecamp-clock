export enum TimerTypes {
  pomodoro = "pomodoro",
  shortBreak = "short break",
  longBreak = "long break",
}

export enum TimerStatus {
  resumed = "resumed",
  paused = "paused",
}

export enum SelectedColor {
  blue = "bg-blue-500",
  red = "bg-rose-500",
  purple = "bg-purple-500",
}

export enum SelectedFont {
  roboto = "font-['Roboto']",
  serif = "font-['DM_Serif_Display']",
  playfair = "font-['Playfair_Display']",
}

export type TimerStateTypes = {
  isSettingsModalOpen: boolean;
  timerType: TimerTypes;
  timeLeft: number;
  pomodoroTimeLeft: number;
  shortBreakTimeLeft: number;
  longBreakTimeLeft: number;
  timerStatus: TimerStatus;
  selectedFont: SelectedFont;
  selectedColor: SelectedColor;
  volume: boolean;
};

export type SettingsType = {
  pomodoroTimeLeft: number;
  shortBreakTimeLeft: number;
  longBreakTimeLeft: number;
  selectedFont: SelectedFont;
  selectedColor: SelectedColor;
};
