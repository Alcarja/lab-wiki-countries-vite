import { Link } from "react-router-dom";

async function HomePage({ countries }) {
  return countries.map((oneCountry) => {
    return (
      <div key={oneCountry._id}>
        <img
          src={`https://flagpedia.net/data/flags/icon/72x54/${oneCountry.alpha2Code.toLowerCase()}.png`}
        />
        <Link to={`/${oneCountry.alpha3Code}`}>
          <h3>{oneCountry.name.common}</h3>
        </Link>
      </div>
    );
  });
}

export default HomePage;
