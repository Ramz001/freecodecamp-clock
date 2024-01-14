export enum TimerTypes {
  pomodoro = 'pomodoro',
  shortBreak = 'short break',
  longBreak = 'long break'
}

export enum TimerStatus{
  active = 'active',
  paused = 'paused'
}

export enum SelectedColor{
  blue = 'bg-cyan-500',
  red = 'bg-rose-500',
  purple = 'bg-purple-500'
}

export type TimerStateTypes = {
  isSettingsModalOpen: boolean;
  timerType: TimerTypes;
  timeLeft: number;
  pomodoroTimeLeft: number;
  shortBreakTimeLeft: number;
  longBreakTimeLeft: number;
  timerStatus: TimerStatus;
  selectedFont: string;
  selectedColor: SelectedColor
}

