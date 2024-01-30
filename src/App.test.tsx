import { render } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";

it("renders the App component", () => {
  const component = (
    <Provider store={store}>
      <App />
    </Provider>
  );
  render(component)
});
