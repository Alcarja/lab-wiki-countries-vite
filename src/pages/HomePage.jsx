import { useState } from "react";
import axios from "axios";

async function HomePage() {
  const response = await axios.get(
    `https://ih-countries-api.herokuapp.com/countries`
  );
  const [countries, SetCountries] = useState(response);

  console.log(response);

  return <h1>WikiCountries: Your Guide to the World</h1>;
}

export default HomePage;
