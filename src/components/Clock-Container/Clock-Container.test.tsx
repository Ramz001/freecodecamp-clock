import { screen, render } from "@testing-library/react";
import ClockContainer from "./Clock-Container.component";
import { Provider } from "react-redux";
import store from "../../store/store";

const Mock = (
  <Provider store={store}>
    <ClockContainer />
  </Provider>
);

it("renders clock container", () => {
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
  <ClockContainer />
</Provider>
`)
});
