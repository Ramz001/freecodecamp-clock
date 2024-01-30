import Options from "./Options.component";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store/store";

const mock = (
  <Provider store={store}>
    <Options />
  </Provider>
);

it("renders options component", () => {
  render(mock);
});
