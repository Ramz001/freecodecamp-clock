import { screen, render } from "@testing-library/react";
import MainClock from "./Main-Clock.component";
import { Provider } from "react-redux";
import store from "../../store/store";

it("renders main clock component", () => {
  const component = (
    <Provider store={store}>
      <MainClock />
    </Provider>
  );
  render(component);
  expect(component).toBeTruthy();
});
