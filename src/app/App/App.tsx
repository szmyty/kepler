/**
 * App Component
 * - Uses the Router component to define the application's routing structure.
 */
import Router from "../Router";
import ErrorBoundary from "../../components/ErrorBoundary";

const App: React.FC = () => {
    return (
      <ErrorBoundary>
        <Router />
      </ErrorBoundary>
    );
  };

export default App;
