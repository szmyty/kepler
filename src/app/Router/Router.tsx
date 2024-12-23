/**
 * Router Component
 * - Defines the routing structure for the application.
 * - Utilizes the Layout component and routes to specific pages.
 */
import { Routes, Route } from "react-router-dom";
import Layout from "../Layout";
import NotFound from "../../pages/NotFound";
import { routes } from "../routes";
import Home from "../../pages/Home";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path={routes.notFound} element={<NotFound />} />
    </Routes>
  );
};

export default Router;
