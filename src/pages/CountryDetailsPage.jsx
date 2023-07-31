import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function CountryDetails() {
  const [country, setCountry] = useState(null);
  const { countryId } = useParams();
  console.log(countryId);

  const fetchOneCountry = async () => {
    try {
      const res = await axios.get(
        `https://ih-countries-api.herokuapp.com/countries/${countryId}`
      );
      console.log("Here are the details", res.data);
      setCountry(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchOneCountry();
  }, [countryId]);

  return (
    <div>
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
      />
      <h2>{country.name.common}</h2>
      <h4>Capital: {country.capital}</h4>
      <h4>
        Borders:{" "}
        {country.borders.map((oneBorder) => {
          return (
            <>
              <Link key={oneBorder} to={`/$oneBorder`}>
                <h6>{oneBorder}</h6>;
              </Link>
              ;
            </>
          );
        })}
      </h4>
    </div>
  );
}

export default CountryDetails;
