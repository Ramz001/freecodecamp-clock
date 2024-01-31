import { screen, render } from "@testing-library/react";
import Icon from "./Icon.component";

it("renders an icon component", () => {
  render(<Icon />);
  const title = screen.getByRole("heading", { name: /pomodoro/ });
  expect(title).toBeInTheDocument();
  expect(<Icon />).toMatchInlineSnapshot(`<Icon />`)
});
