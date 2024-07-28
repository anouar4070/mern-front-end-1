import React, { useRef, useEffect } from "react";

import "./Map.css";

const Map = (props) => {
  const mapRef = useRef();

  const { center, zoom } = props;

  useEffect(() => {
    try {
      new window.ol.Map({
        target: mapRef.current.id,
        layers: [
          new window.ol.layer.Tile({
            source: new window.ol.source.OSM(),
          }),
        ],
        view: new window.ol.View({
          center: window.ol.proj.fromLonLat([center.lng, center.lat]),
          zoom: zoom,
        }),
      });
    } catch (error) {
      console.error("Error creating map:", error);
    }
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
      id="map"
    ></div>
  );
};

export default Map;

// useEffect will run after jsx has been rendered  in line 19, so the connection ref={mapRef} will be established by the time this code runs
