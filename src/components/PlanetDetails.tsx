import { Typography } from "@mui/material";
import { styled as muiStyled } from "@mui/material";
import { IPlanet } from "../interfaces";
import { CardLayout } from "../layouts";
import AppLoader from "./AppLoader";

export interface PlanetDetailsProps {
  planet?: IPlanet | null;
  style?: React.CSSProperties;
  loading?: boolean;
}

export const PlanetDetails = (props: PlanetDetailsProps) => {
  const getContent = () => {
    if (props?.loading) {
      return (
        <LoaderContainer>
          <AppLoader></AppLoader>
        </LoaderContainer>
      );
    } else {
      return (
        <>
          <Typography color="textPrimary" gutterBottom variant="h6">
            {props?.planet?.name}
          </Typography>
          <Typography color="textSecondary" variant="body2">
            {`Climate: ${props?.planet?.climate}`}
          </Typography>
          <Typography color="textSecondary" variant="body2">
            {`Terrain: ${props?.planet?.terrain}`}
          </Typography>
          <Typography color="textSecondary" variant="body2">
            {`Population: ${props?.planet?.population}`}
          </Typography>
        </>
      );
    }
  };

  return (
    <PlanetDetailsContent {...props} data-testid={"planet-details-container"}>
      <CardLayout title="Planet">{getContent()}</CardLayout>
    </PlanetDetailsContent>
  );
};

const PlanetDetailsContent = muiStyled("div")({
  minHeight: 100,
});

const LoaderContainer = muiStyled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: 100,
});
