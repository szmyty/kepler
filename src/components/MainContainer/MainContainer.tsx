/**
 * MainContainer Component
 * - Displays the main content area of the application.
 */
import { Box, Typography } from "@mui/material";
import { MainContainerProps } from "./MainContainer.types";

const MainContainer: React.FC<MainContainerProps> = ({ children, ...props }) => {
  return (
    <Box
      {...props}
      sx={{
        flexGrow: 1,
        padding: "20px",
        ...props.sx,
      }}
    >
      <Typography variant="body1">I am body</Typography>
      {children}
    </Box>
  );
};

export default MainContainer;
