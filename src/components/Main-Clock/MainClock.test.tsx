import { screen, render } from "@testing-library/react";
import MainClock from "./Main-Clock.component";
import { Provider } from "react-redux";
import store from "../../store/store";

const Mock = (
  <Provider store={store}>
    <MainClock />
  </Provider>
);

it("renders main clock component", () => {
  render(Mock);
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
  <MainClock />
</Provider>
`)
});
