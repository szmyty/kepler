import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { routes } from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.notFound} element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
