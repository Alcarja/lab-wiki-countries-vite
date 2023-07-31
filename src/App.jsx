import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetailsPage";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [countries, SetCountries] = useState([]);

  useEffect(() => {
    const getCountriesData = async () => {
      try {
        const res = await axios.get(
          `https://ih-countries-api.herokuapp.com/countries`
        );
        SetCountries(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getCountriesData();
  }, []);

  return (
    <div className="App">
      <h1>LAB | React WikiCountries</h1>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage countries={countries} />} />
        <Route path="/:countryId" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
