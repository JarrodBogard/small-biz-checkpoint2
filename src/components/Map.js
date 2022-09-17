import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

const Map = (props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
  });
  if (!isLoaded) return <div>Loading...</div>;
  return <MapComponent latitude={props.latitude} longitude={props.longitude} />;
};

const MapComponent = ({ latitude, longitude }) => {
  const center = useMemo(
    () => ({ lat: latitude, lng: longitude }),
    [latitude, longitude]
  );
  return (
    <GoogleMap
      zoom={10}
      center={center}
      mapContainerClassName={"map-container"}
    >
      <MarkerF position={center} />
    </GoogleMap>
  );
};

export default Map;
