import { screen, render } from "@testing-library/react";
import Settings from "./Settings.component";
import { Provider } from "react-redux";
import store from "../../store/store";

const Mock = (
  <Provider store={store}>
    <Settings />
  </Provider>
);

it("renders settings component", () => {
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
  <Settings />
</Provider>
`)
});
