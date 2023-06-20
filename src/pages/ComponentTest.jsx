import React, { useEffect, useState } from "react";
import axios from "axios";

function ComponentTest() {
  const [airports, setAirports] = useState([]);

  useEffect(() => {
    axios
      .get("https://final-project-develop.up.railway.app/airport")
      .then((response) => {
        setAirports(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <ul>
        {airports.map((airport) => (
          <li key={airport.label}>{airport.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default ComponentTest;
