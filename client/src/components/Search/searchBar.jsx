import "./searchBar.css";
import { useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";

function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  console.log(searchInput);

  return (
    <div className="container">
      <div className="p-1 bg-light rounded rounded-pill shadow-sm">
        <div className="input-group">
          <input
            type="text"
            placeholder="Location"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="form-control border-0 bg-light"
          />
          <div className="input-group-append">
            <SearchIcon size={15} className="icon" />
          </div>
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <div id="date-picker" class="input-group datepicker">
            <input
              placeholder="Select due date"
              type="date"
              id="example"
              name="dueDate"
              class="form-control"
            />
          </div>
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <h2>hello</h2>
            <input
              type="number"
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
