/**
 * NotFound Component
 * - Displays a fallback UI for unmatched routes.
 */
import { Box, Typography } from "@mui/material";
import { NotFoundProps } from "./NotFound.types";

const NotFound: React.FC<NotFoundProps> = ({ ...props }) => {
  return (
    <Box
      {...props}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        ...props.sx, // Allow style overrides
      }}
    >
      <Typography variant="h4">404: Page Not Found</Typography>
    </Box>
  );
};

export default NotFound;
