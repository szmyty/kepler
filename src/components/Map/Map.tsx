/**
 * Map Component
 * - Renders the Kepler.gl map.
 * - Fills the available space in the container.
 * - Removes the Kepler.gl logo for a clean UI.
 */
import KeplerGl from "@kepler.gl/components";
import { Box } from "@mui/material";
import { MapProps } from "./Map.types";

const Map: React.FC<MapProps> = ({ ...props }) => {
  const mapboxToken = import.meta.env.VITE_MAPBOX_API_TOKEN || "";
  return (
    <Box
      {...props}
      sx={{
        width: "100%",
        height: "100%",
        ...props.sx, // Allow overriding styles
      }}
    >
      <KeplerGl
        id="kepler-map"
        width={window.innerWidth}
        height={window.innerHeight}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_TOKEN || ""}
        logoPosition={null} // Removes Kepler.gl logo
      />
    </Box>
  );
};

export default Map;
