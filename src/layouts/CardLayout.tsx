import { ReactNode } from "react";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";

export interface CardLayoutProps {
  title: string;
  children: ReactNode;
}

export const CardLayout = (props: CardLayoutProps) => {
  const { children } = props;

  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography color="textPrimary" gutterBottom variant="h5">
            {props?.title}
          </Typography>
          <Divider style={{ marginBottom: "8px" }} />
          {children}
        </Box>
      </CardContent>
    </Card>
  );
};
