import KeplerGl from "@kepler.gl/components";

const Map = () => {
  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <KeplerGl
        id="map"
        width={window.innerWidth}
        height={window.innerHeight}
        
        // mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_TOKEN || ""}
      />
    </div>
  );
};

export default Map;
