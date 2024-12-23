/**
 * ErrorBoundary Component
 * - Catches errors in the component tree and displays fallback UI.
 * - Logs errors for debugging purposes.
 */
import { FallbackProps, ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import { Box, Typography, Button } from "@mui/material";

// Fallback component to display when an error occurs
const ErrorFallback: React.FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <Typography variant="h4" color="error" gutterBottom>
        Something went wrong!
      </Typography>
      <Typography variant="body1" color="textSecondary">
        {error.message}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={resetErrorBoundary}
        sx={{ marginTop: "20px" }}
      >
        Try Again
      </Button>
    </Box>
  );
};

// Main ErrorBoundary component
const ErrorBoundary: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, info) => {
        console.error("ErrorBoundary caught an error:", error, info);
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
};

export default ErrorBoundary;
