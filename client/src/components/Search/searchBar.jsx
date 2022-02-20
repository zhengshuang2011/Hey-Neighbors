import "./searchBar.css";
import { useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [mask, setMask] = useState(false);
  const [vaccine, setVaccine] = useState(false);
  // console.log(
  //   "location",
  //   searchInput,
  //   "date",
  //   selectedDate,
  //   "mask",
  //   mask,
  //   "vaccine",
  //   vaccine
  // );

  const onSubmit = () => {
    console.log("submit");
  };

  const onCancel = () => {
    setSearchInput("");
    setSelectedDate(new Date());
    setMask(false);
    setVaccine(false);
  };

  return (
    <div className="container">
      <div className="p-1 bg-light rounded rounded-pill shadow-sm ">
        <div className="input-group ">
          <input
            type="text"
            placeholder="Location"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="form-control border-0 bg-light location"
          />

          <div className="input-group-append">
            <SearchIcon size={15} className="icon" />
          </div>
        </div>
      </div>
      {searchInput && (
        <div className="filter">
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Calendar
              date={selectedDate}
              onChange={setSelectedDate}
              className="date"
            />
          </MuiPickersUtilsProvider>

          <div className="option">
            <span>
              options:
              <div className="form-check form-check-inline mask">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox1"
                  value={mask}
                  onChange={() => {
                    setMask(!mask);
                  }}
                />
                <label className="form-check-label" for="inlineCheckbox1">
                  Mask
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox2"
                  value={vaccine}
                  onChange={() => {
                    setVaccine(!vaccine);
                  }}
                />
                <label className="form-check-label" for="inlineCheckbox2">
                  Vaccine
                </label>
              </div>
            </span>
          </div>

          <div>
            <button
              type="button"
              className="btn btn-secondary btn-sm search"
              onClick={onSubmit}
            >
              Search
            </button>
            <button
              type="button"
              className="btn btn-secondary btn-sm cancel"
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
