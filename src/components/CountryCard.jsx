import React from "react";
import { Link } from "react-router-dom";

function CountryCard({ name, flag, logo, population, region, capital, data }) {
  return (
    <Link
      to={`./country/${name}`}
      className="country-card card"
      state={{ data }}
    >
      <div className="flag-container">
        <img src={flag} className="card-img-top" alt={`${name} flag`} />
      </div>
      <div className="card-body">
        <div
          className="headerAndLogo"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h4 className="card-title">
            <b>{name}</b>
          </h4>
          {logo && (
            <img
              style={{ width: "20%", objectFit: "cover" ,overflow:"hidden"}}
              src={logo}
              className="img-fluid"
              alt={`${name} logo`}
            />
          )}
        </div>
        <p className="card-text">
          <b>Population: </b>
          {population}
        </p>
        <p className="card-text">
          <b>Region: </b>
          {region}
        </p>
        {capital && (
          <p className="card-text">
            <b>Capital: </b>
            {capital}
          </p>
        )}
      </div>
    </Link>
  );
}

export default CountryCard;
