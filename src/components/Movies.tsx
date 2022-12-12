import { Chip } from "@mui/material";
import { styled as muiStyled } from "@mui/material";
import { IFilm } from "../interfaces";
import { CardLayout } from "../layouts";
import AppLoader from "./AppLoader";

export interface MoviesProps {
  data: IFilm[] | null;
  loading?: boolean;
}

export const Movies = (props: MoviesProps) => {
  const getContent = () => {
    if (props?.loading) {
      return (
        <LoaderContainer>
          <AppLoader></AppLoader>
        </LoaderContainer>
      );
    } else {
      return (
        <MovieList>
          {props?.data?.map((film: IFilm, index: number) => (
            <Chip
              key={film.title + index}
              data-testid="movies-chip"
              style={{ marginRight: "8px", marginTop: "8px" }}
              label={film.title}
            />
          ))}
        </MovieList>
      );
    }
  };

  return (
    <MovieListContent {...props} data-testid={"movies-container"}>
      <CardLayout title="Movies">{getContent()}</CardLayout>
    </MovieListContent>
  );
};

const MovieListContent = muiStyled("div")({
  minHeight: 80,
});

const LoaderContainer = muiStyled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: 80,
});

const MovieList = muiStyled("div")({
  paddingTop: 8,
  paddingBottom: 8,
});
