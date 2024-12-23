/**
 * Layout Component
 * - Wraps the application with shared UI elements (AppBar, Footer).
 * - Renders nested routes via the React Router Outlet.
 */
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import AppBar from "../AppBar";
import Footer from "../Footer";

const Layout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <AppBar />
      <Box sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
