import { screen, render } from "@testing-library/react";
import Icon from "./Icon.component";

it("renders an icon component", () => {
  render(<Icon />);
  const title = screen.getByText("pomodoro");
  expect(title).toBeTruthy();
});