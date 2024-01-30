import { screen, render } from "@testing-library/react";
import MainClock from "./Main-Clock.component";
import { Provider } from "react-redux";
import store from "../../store/store";

const mock = (
  <Provider store={store}>
    <MainClock />
  </Provider>
);

it("renders main clock component", () => {
  render(mock);
  
});
