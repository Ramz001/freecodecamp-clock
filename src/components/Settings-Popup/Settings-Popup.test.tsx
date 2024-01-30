import SettingsPopup from "./Setttings-Popup.component";
import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store/store";

const mock = (
  <Provider store={store}>
    <SettingsPopup handlePopup={() => console.log('popup')} />
  </Provider>
);

it("tests settings popup component", () => {
  render(mock);
});
