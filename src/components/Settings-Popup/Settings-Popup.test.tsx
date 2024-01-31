import SettingsPopup from "./Setttings-Popup.component";
import { screen, render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store/store";
import { TimerTypes } from "../../features/timer/timer.types";

const mockHandlePopup = jest.fn()

const Mock = (
  <Provider store={store}>
    <SettingsPopup handlePopup={mockHandlePopup} />
  </Provider>
);

describe("tests the settings popup", () => {
  render(Mock);
  it("tests the input elements change events", () => {
    const pomodoroInput: HTMLInputElement = screen.getByTestId(
      TimerTypes.pomodoro
    );
    const shortBreakInput: HTMLInputElement = screen.getByTestId(
      TimerTypes.shortBreak
    );
    const longBreakInput: HTMLInputElement = screen.getByTestId(
      TimerTypes.longBreak
    );

    fireEvent.change(pomodoroInput, { target: { value: 22 } });
    expect(Number(pomodoroInput.value)).toEqual(22);
    fireEvent.change(shortBreakInput, { target: { value: 6 } });
    expect(Number(shortBreakInput.value)).toEqual(6);
    fireEvent.change(longBreakInput, { target: { value: 12 } });
    expect(Number(longBreakInput.value)).toEqual(12);
  });
  it("snapshot tests the settings popup", () => {
    expect(Mock).toMatchInlineSnapshot(`
<Provider
  store={
    Object {
      "@@observable": [Function],
      "dispatch": [Function],
      "getState": [Function],
      "replaceReducer": [Function],
      "subscribe": [Function],
    }
  }
>
  <SettingsPopup
    handlePopup={[MockFunction]}
  />
</Provider>
`);
  });
});
