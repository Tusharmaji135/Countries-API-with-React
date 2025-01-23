import {useState } from "react";
import SearchBar from "../components/SearchBar";
import SelectMenu from "../components/SelectMenu";
import CountriesList from "../components/CountriesList";
import ScrollToTop from "../components/ScrollToTop";

function Home() {
  const [query, setQuery] = useState("");
  return (
    <>
      {/* main content */}
      <main className="container">
        {/* search and filter */}
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery} />
          <SelectMenu setQuery={setQuery}/>
        </div>
        {/* card container */}
        <CountriesList query={query} />
     <ScrollToTop/>
      </main>

    </>
  );
}

export default Home;
