import { screen, render, fireEvent } from "@testing-library/react";
import Settings from "./Settings.component";
import { Provider } from "react-redux";
import store from "../../store/store";

const Mock = (
  <Provider store={store}>
    <Settings />
  </Provider>
);

const mockHandlePopup = jest.fn();

it("checks whether pop up works", () => {
  render(Mock);
  const gearIcon = screen.getByAltText("gear icon");
  fireEvent.click(gearIcon);
  const settingsPopup = screen.getByRole("heading", {
    name: /settings/i,
    level: 3,
  });
  expect(settingsPopup).toBeVisible();

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
  <Settings />
</Provider>
`);
});
