import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import { styled as muiStyled } from "@mui/material";
import AppLoader from "./AppLoader";

export interface AccountProfileProps {
  name?: string;
  gender?: string;
  haircolor?: string;
  eyecolor?: string;
  loading?: boolean;
}

export const AccountProfile = (props: AccountProfileProps) => {
  const getContent = () => {
    if (props?.loading) {
      return <AppLoader></AppLoader>;
    } else {
      return (
        <>
          <Avatar
            sx={{
              height: 64,
              mb: 2,
              width: 64,
            }}
          />
          <Typography color="textPrimary" gutterBottom variant="h5">
            {props.name}
          </Typography>
          <Typography color="textSecondary" variant="body2">
            {`${props.gender}`}
          </Typography>
          <Typography color="textSecondary" variant="body2">
            {`Hair: ${props.haircolor}`}
          </Typography>
          <Typography color="textSecondary" variant="body2">
            {`Eye: ${props.eyecolor}`}
          </Typography>
        </>
      );
    }
  };

  return (
    <Card {...props} data-testid={"account-profile-container"}>
      <CardContent>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <ProfileContent>{getContent()}</ProfileContent>
        </Box>
      </CardContent>
    </Card>
  );
};

const ProfileContent = muiStyled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: 150,
});
