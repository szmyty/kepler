import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Map from "./pages/Map";
import NotFound from "./pages/NotFound";
import { routes } from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={routes.home} element={<Map />} />
          <Route path={routes.notFound} element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
