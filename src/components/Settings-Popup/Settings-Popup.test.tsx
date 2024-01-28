import SettingsPopup from "./Setttings-Popup.component";
import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store/store";

it("tests settings popup component", () => {
  const component = (
    <Provider store={store}>
      <SettingsPopup />
    </Provider>
  );
  render(component);
  expect(component);
});
