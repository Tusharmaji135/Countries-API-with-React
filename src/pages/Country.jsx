import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import CountryMainCardShimmer from "../components/CountryMainCardShimmer";

function Country() {
  const params = useParams();
  const { state } = useLocation();
  const countryName = params.country;
  const [countryData, setCountryData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  function updateCountryData(data) {
    setCountryData({
      name: data.name.common,
      flag: data.flags ? data.flags.svg : "N/A",
      nativeName: data.name.nativeName
        ? Object.values(data.name.nativeName)[0]?.common || data.name.common
        : data.name.common,
      population: data.population
        ? data.population.toLocaleString("en-IN")
        : "N/A",
      region: data.region || "N/A",
      subRegion: data.subregion || "N/A",
      capital: data.capital ? data.capital.join(", ") : "N/A",
      tld: data.tld ? data.tld.join(", ") : "N/A",
      maps: data.maps.googleMaps,
      currency: data.currencies
        ? Object.values(data.currencies)[0]?.name || "N/A"
        : "N/A",
      languages: data.languages
        ? Object.values(data.languages).join(", ")
        : "N/A",
      borders: [],
    });

    if (!data.borders) {
      data.borders = [];
    }

    Promise.all(
      data.borders.map((border) =>
        fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([borderCountry]) => borderCountry?.name?.common || "N/A")
      )
    ).then((borders) => {
      setCountryData((prevState) => ({ ...prevState, borders }));
    });
  }

  useEffect(() => {
    if (state) {
      const { data } = state;
      updateCountryData(data);
      return;
    }
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        updateCountryData(data);
      })
      .catch((error) => {
        console.log("hii", error);
        setNotFound(true);
      });
  }, [countryName]);

  if (notFound) {
    return (
      <div>
        <h1>Country Not Found !</h1>
      </div>
    );
  }
  if (!countryData) {
    return <CountryMainCardShimmer />;
  }

  return (
    <>
      <main className="container">
        {/* <!-- backBtn --> */}
        <div onClick={() => history.back()} className="back-btn btn">
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </div>
        {/* <!-- country-details --> */}
        <div className="country-details">
          <Link to={countryData.maps}>
              <img
                className="img-fluid"
                src={countryData.flag}
                alt={countryData.name}
                title={countryData.name}
              />
           
          </Link>

          <div className="details-text-container">
            <h1>{countryData.name}</h1>
            <div className="details-text">
              <p>
                <b>Native Name: </b>
                {countryData.nativeName}
              </p>
              <p>
                <b>Population: </b>
                {countryData.population}
              </p>
              <p>
                <b>Region: </b>
                {countryData.region}
              </p>
              <p>
                <b>Sub Region: </b>
                {countryData.subRegion}
              </p>
              <p>
                <b>Capital: </b>
                {countryData.capital}
              </p>
              <p>
                <b>Top Level Domain: </b>
                {countryData.tld}
              </p>
              <p>
                <b>Currencies: </b>
                {countryData.currency}
              </p>
              <p>
                <b>Languages: </b>
                {countryData.languages}
              </p>
            </div>
            {countryData.borders.length !== 0 ? (
              <div className="border-countries">
                <p>
                  <b>Border Countries: </b> &nbsp;&nbsp;
                  {countryData.borders.map((border) => (
                    <Link key={border} to={`/country/${border}`}>
                      {border}
                    </Link>
                  ))}
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default Country;
