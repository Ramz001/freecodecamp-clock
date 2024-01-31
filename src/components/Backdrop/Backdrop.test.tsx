import { render, screen } from "@testing-library/react";
import Backdrop from "./Backdrop.component";

const mockedOnClick = jest.fn()

const Mock = (
  <Backdrop
    children={<h1>Hello</h1>}
    onClick={mockedOnClick}
  />
);

it("tests the backdrop component", () => {
  render(Mock);
  const childrenElement = screen.getByRole('heading')
  expect(childrenElement).toBeInTheDocument()
  expect(Mock).toMatchInlineSnapshot(`
<Backdrop
  onClick={[MockFunction]}
>
  <h1>
    Hello
  </h1>
</Backdrop>
`)
});
