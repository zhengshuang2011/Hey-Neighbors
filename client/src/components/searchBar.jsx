import "./searchBar.css";
import { useState } from "react";

function SearchBar() {
  const [searchInput, setSearchInput] = useState();

  return (
    <div className="search">
      <input
        className="searchInput"
        value={searchInput}
        onChange={(e) => setSearchInput()}
        type="text"
        placeholder="Location"
      />
    </div>
  );
}

export default SearchBar;
