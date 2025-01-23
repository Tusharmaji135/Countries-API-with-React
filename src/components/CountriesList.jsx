// import countriesData from "../assets/data/countriesData";
import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import CountriesListShimmer from "./CountriesListShimmer";

function CountriesList({ query }) {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      });
  }, []);

  return (
    <>
      {!countriesData.length ? (
        <CountriesListShimmer />
      ) : (
        <div className="countries-container">
          {countriesData
            .filter((country) =>
              country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query)
            )
            .map((country) => (
              <CountryCard
                key={country.name.common}
                name={country.name.common}
                flag={country.flags.svg}
                logo={country.coatOfArms.svg}
                population={country.population.toLocaleString("en-IN")}
                region={country.region}
                capital={country.capital}
                data={country}
              />
            ))}
        </div>
      )}
    </>
  );
}

export default CountriesList;
