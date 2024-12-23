/**
 * Providers Component
 * - Wraps the application with all global providers.
 * - Centralizes the setup of HelmetProvider, Router, Redux, etc.
 */

import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../../store";
import { ProvidersProps } from "./Providers.types";

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <HelmetProvider>
      <ReduxProvider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </ReduxProvider>
    </HelmetProvider>
  );
};

export default Providers;
