import Options from "./Options.component";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store/store";

const Mock = (
  <Provider store={store}>
    <Options />
  </Provider>
);

it("renders options component", () => {
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
  <Options />
</Provider>
`)
});
