import { screen, render } from "@testing-library/react";
import ClockContainer from "./Clock-Container.component";
import { Provider } from "react-redux";
import store from "../../store/store";

const mock = (
  <Provider store={store}>
    <ClockContainer />
  </Provider>
);

it("renders clock container", () => {
  render(mock);

  const elements = screen;
  expect(elements);
});
