import Options from "./Options.component";
import { fireEvent, getAllByRole, getByText, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store/store";

const Mock = (
  <Provider store={store}>
    <Options />
  </Provider>
);

it("checks whether buttons work properly", () => {
  render(Mock);

  const buttons: HTMLButtonElement[] = screen.getAllByRole("button")

  buttons.map(button => {
    fireEvent.click(button)
    expect(button).toHaveClass("text-blue-950 hover:text-blue-950")
  })

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
