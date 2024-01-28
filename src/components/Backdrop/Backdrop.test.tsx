import { render } from "@testing-library/react";
import Backdrop from "./Backdrop.component";

it("renders the backdrop", () => {
  render(<Backdrop children onClick={() => console.log("toggled settings")} />);
});
