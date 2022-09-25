import "../../App.css";
import React, { useState, useEffect } from "react";
import HeroSection from "../HeroSection";
import LocationsSection from "../LocationsSection";
import GoogleMapSection from "../GoogleMapSection";
import FooterSection from "../FooterSection";
import ImageWTextSection from "../ImageWTextSection";

function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/TomSearle/cb-devtest-api/locations"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        setData(actualData[0]);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <>
      <HeroSection />
      <ImageWTextSection />
      {data ? <GoogleMapSection mapMarkers={data} /> : error}
      {data ? <LocationsSection mapData={data} /> : error}
      <FooterSection />
    </>
  );
}
export default Home;
