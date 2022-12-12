import { render, screen } from "@testing-library/react";
import AppLoader from "../AppLoader";

describe("AppLoader", () => {
  test("renders AppLoader component", () => {
    render(<AppLoader />);
    const component = screen.queryByTestId("app-loader");
    expect(component).toBeInTheDocument();
  });
});
