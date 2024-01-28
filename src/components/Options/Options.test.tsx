import Options from "./Options.component";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store/store";

it("renders options component", () => {
  const component = (
    <Provider store={store}>
      <Options />
    </Provider>
  );
  render(component);
  expect(component).toBeTruthy();
});
