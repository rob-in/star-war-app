import { render, screen } from "@testing-library/react";
import { PageHeader, PageHeaderProps } from "../PageHeader";

describe("PageHeader", () => {
  let props: PageHeaderProps;

  beforeEach(() => {
    props = {
      title: "Dummy page title",
    };
  });

  test("renders PageHeader component", () => {
    render(<PageHeader title="Dummy page header" />);
    const component = screen.queryByTestId("page-header");
    expect(component).toBeInTheDocument();
  });

  test("renders title correctly", () => {
    render(<PageHeader title={props.title} />);
    const component = screen.getByText(props.title);
    expect(component).toBeTruthy();
  });
});
