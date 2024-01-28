import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./App";

it("renders the App Component", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
