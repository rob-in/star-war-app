import { render, screen } from "@testing-library/react";
import { AccountProfile, AccountProfileProps } from "../AccountProfile";

describe("AccountProfile", () => {
  let props: AccountProfileProps;

  beforeEach(() => {
    props = {
      name: "Super women",
      gender: "female",
      haircolor: "blue",
      eyecolor: "brown",
    };
  });

  test("renders AccountProfile component", () => {
    render(<AccountProfile />);
    const component = screen.queryByTestId("account-profile-container");
    expect(component).toBeInTheDocument();
  });

  test("does not renders Apploader when loading is false", () => {
    render(<AccountProfile {...props} />);
    const component = screen.queryByTestId("app-loader");
    expect(component).toBeNull();
  });

  test("renders name correctly", () => {
    render(<AccountProfile {...props} />);
    const component = screen.getByText("Super women");
    expect(component).toBeTruthy();
  });
});
