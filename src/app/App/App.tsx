/**
 * App Component
 * - Defines application routes and assigns layouts to each route.
 */
import { Routes, Route } from "react-router-dom";
// import Layout from "../../components/Layout";
// import MainContainer from "../../components/MainContainer";
// import MapContainer from "../../components/MapContainer";
// import NotFound from "../../components/NotFound";
import { routes } from "../routes";
import Box from "@mui/material/Box";

const App: React.FC = () => {
  return (
    <Routes>
      {/* Layout with shared UI (AppBar, Footer) */}
      {/* <Route path={routes.home} element={<Layout />}>
        <Route index element={<MainContainer><MapContainer /></MainContainer>} />
      </Route> */}

      {/* Not Found Route */}
      <Route path={routes.notFound} element={<Box>Hi</Box>} />
    </Routes>
  );
};

export default App;
