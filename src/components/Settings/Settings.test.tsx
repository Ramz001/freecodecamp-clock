import { screen, render } from "@testing-library/react";
import Settings from "./Settings.component";
import { Provider } from "react-redux";
import store from "../../store/store";

const mock = (
  <Provider store={store}>
    <Settings />
  </Provider>
);

it("renders settings component", () => {
  render(mock);
});
