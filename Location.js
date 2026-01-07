import React from "react";

function Location() {
  return (
    <div style={{ padding: 40 }}>
      <h2>Our Location</h2>
      <iframe
        title="map"
        src="https://maps.google.com/maps?q=istanbul&t=&z=13&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="400"
      ></iframe>
    </div>
  );
}

export default Location;
