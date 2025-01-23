import React from "react";

function SelectMenu({setQuery}) {
  return (
    <div className="filter-container">
      <select className="filterByRegion" defaultValue="-1" onChange={(e)=>{
        setQuery(e.target.value.toLowerCase())
      }}>
        <option value="-1" hidden>
          Filter by Region
        </option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
      <button style={{ display: "none" }} className="btn btn-danger clearFilter">
        Clear Filter
      </button>
    </div>
  );
}

export default SelectMenu;
