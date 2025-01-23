import React from "react";
import "../styles/CountriesListShimmer.css";

function CountriesListShimmer() {
  return (
    <div className="countries-container">
      {Array.from({ length: 24 }).map((el, i) => {
        return <div key={i} className="country-card card shimmer-card "></div>;
      })}
    </div>
  );
}

export default CountriesListShimmer;
