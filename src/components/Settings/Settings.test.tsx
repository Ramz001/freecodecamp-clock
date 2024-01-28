import { screen, render } from "@testing-library/react";
import Settings from "./Settings.component";
import { Provider } from "react-redux";
import store from "../../store/store";

it("renders settings component", () => {
  const component = (
    <Provider store={store}>
      <Settings />
    </Provider>
  );
  render(component);
  expect(component).toBeTruthy();
});
