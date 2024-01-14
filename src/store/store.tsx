import { configureStore } from "@reduxjs/toolkit";
import timerReducer from "../features/timer/timer.slice";

const store = configureStore({
  reducer: {
    timer: timerReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store