/**
 * MainContainer Component
 * - Displays the main content area of the application.
 */
import { Box } from "@mui/material";
import { MainContainerProps } from "./MainContainer.types";

const MainContainer: React.FC<MainContainerProps> = ({ children, ...props }) => {
  return (
    <Box
      {...props}
      sx={{
        flexGrow: 1,
        padding: "0px",
        ...props.sx,
      }}
    >
      {children}
    </Box>
  );
};

export default MainContainer;
