import { screen, render } from "@testing-library/react";
import ClockContainer from "./Clock-Container.component";
import { Provider } from "react-redux";
import store from "../../store/store";

it("renders clock container", () => {
  const component = (
    <Provider store={store}>
      <ClockContainer />
    </Provider>
  );
  render(component);

  const elements = screen;
  expect(elements);
});
