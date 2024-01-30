import { render, screen } from "@testing-library/react";
import Backdrop from "./Backdrop.component";

const mockComponent = (
  <Backdrop
    children={<h1>Hello</h1>}
    onClick={() => console.log("toggled settings")}
  />
);

it("tests the backdrop component", () => {
  render(mockComponent);
  const childrenElement = screen.getByRole('heading')
  expect(childrenElement).toBeInTheDocument()
});
