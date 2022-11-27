import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

import "./Map.css";

const Map = (props) => {
  const { center, zoom } = props;
  const [map, setMap] = React.useState(null);

  const containerStyle = {
    width: "755px",
    height: "250px",
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyC6DtoJosK-lFyB8uc3oQmeA5GDPE6dOoM",
  });

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={zoom}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={center}/>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default Map;
