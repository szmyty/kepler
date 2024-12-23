/**
 * Home Page Component
 * - Combines the AppBar, MainContainer, and Footer to render the home page.
 */
import AppBar from "../../components/AppBar";
import Footer from "../../components/Footer";
import MainContainer from "../../components/MainContainer";
import { Box } from "@mui/material";
import { HomeProps } from "./Home.types";

const Home: React.FC<HomeProps> = ({ ...props }) => {
  return (
    <Box
      {...props}
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        ...props.sx,
      }}
    >
      <AppBar />
      <MainContainer />
      <Footer />
    </Box>
  );
};

export default Home;
