import { render, screen } from "@testing-library/react";
import { PlanetDetails, PlanetDetailsProps } from "../PlanetDetails";

describe("PlanetDetails", () => {
  let props: PlanetDetailsProps;

  beforeEach(() => {
    props = {
      planet: {
        name: "Tatooine",
        rotation_period: "23",
        orbital_period: "304",
        diameter: "10465",
        climate: "arid",
        gravity: "1 standard",
        terrain: "desert",
        surface_water: "1",
        population: "200000",
        residents: [
          "https://swapi.dev/api/people/1/",
          "https://swapi.dev/api/people/2/",
          "https://swapi.dev/api/people/4/",
          "https://swapi.dev/api/people/6/",
          "https://swapi.dev/api/people/7/",
          "https://swapi.dev/api/people/8/",
          "https://swapi.dev/api/people/9/",
          "https://swapi.dev/api/people/11/",
          "https://swapi.dev/api/people/43/",
          "https://swapi.dev/api/people/62/",
        ],
        films: [
          "https://swapi.dev/api/films/1/",
          "https://swapi.dev/api/films/3/",
          "https://swapi.dev/api/films/4/",
          "https://swapi.dev/api/films/5/",
          "https://swapi.dev/api/films/6/",
        ],
        created: "2014-12-09T13:50:49.641000Z",
        edited: "2014-12-20T20:58:18.411000Z",
        url: "https://swapi.dev/api/planets/1/",
      },
      style: { backgroundColor: "red" },
      loading: true,
    };
  });

  test("renders PlanetDetails component", () => {
    render(<PlanetDetails/>);
    const component = screen.queryByTestId("planet-details-container");
    expect(component).toBeInTheDocument();
  });

  test("renders title correctly", () => {
    render(<PlanetDetails/>);
    const component = screen.getByText("Planet");
    expect(component).toBeTruthy();
  });

  test("renders style property correctly", () => {
    render(<PlanetDetails style={props.style}/>);
    const component = screen.queryByTestId("planet-details-container");
    expect(component).toHaveStyle(`backgroundColor: "red"`);
  });

  test("does not renders Apploader when loading is false", () => {
    render(<PlanetDetails planet={props?.planet}/>);
    const component = screen.queryByTestId("app-loader");
    expect(component).toBeNull();
  });

  test("renders planet details correctly", () => {
    render(<PlanetDetails planet={props.planet}/>);
    const component = screen.getByText("Tatooine");
    expect(component).toBeTruthy();
  });
});
