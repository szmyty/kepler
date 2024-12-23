/**
 * Layout Component
 * - Provides a shared structure for the application.
 * - Uses React Router's Outlet to render child routes dynamically.
 */
import { Box } from "@mui/material";
import { LayoutProps } from "./Layout.types";
import { Outlet } from "react-router-dom";

const Layout: React.FC<LayoutProps> = ({ ...props }) => {
  return (
    <Box
      {...props}
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        ...props.sx, // Allow style overrides
      }}
    >
      {/* Add shared components like AppBar or Footer here in the future */}
      <Outlet />
    </Box>
  );
};

export default Layout;
