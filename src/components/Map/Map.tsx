/**
 * Map Component
 * - Renders the Kepler.gl map.
 * - Fills the available space in the container.
 * - Removes the Kepler.gl logo for a clean UI.
 */
import { injectComponents, PanelHeaderFactory } from "@kepler.gl/components";
import { Box } from "@mui/material";
import { MapProps } from "./Map.types";
import { useWindowSize } from "@uidotdev/usehooks";

// Define a custom panel header
const CustomPanelHeader: React.FC = () => (
  <></>
  // <div style={{ padding: "10px", textAlign: "center", backgroundColor: "#f5f5f5" }}>
  //   <h1>My Custom Kepler.gl Application</h1>
  // </div>
);

// create a factory
const myCustomHeaderFactory = () => CustomPanelHeader;

// Inject custom header into Kepler.gl,
// @ts-expect-error - KeplerGl doesn't have types yet.
const KeplerGl = injectComponents([[PanelHeaderFactory, myCustomHeaderFactory]]);

const Map: React.FC<MapProps> = ({ ...props }) => {
  const mapboxToken = import.meta.env.VITE_MAPBOX_API_TOKEN || "";
  const { width, height } = useWindowSize();

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
        width={width}
        height={height}
        mapboxApiAccessToken={mapboxToken}
      />
    </Box>
  );
};

export default Map;
