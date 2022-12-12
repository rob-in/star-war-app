import { Typography } from "@mui/material";

export interface PageHeaderProps {
  title: string;
}

export const PageHeader = (props: PageHeaderProps) => {
  const { title } = props;

  return (
    <Typography sx={{ mb: 3 }} variant="h4" data-testid="page-header">
      {title}
    </Typography>
  );
};
