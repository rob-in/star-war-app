import { ReactNode } from "react";
import { Box, Container } from "@mui/material";

export interface MainContentLayoutProps {
  children: ReactNode;
}

export const MainContentLayout = (props: MainContentLayoutProps) => {
  const { children } = props;

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="lg">{children}</Container>
    </Box>
  );
};
