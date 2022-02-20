import React from "react";
import "./SidebarSearch.css";
import { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import axios from "axios";

function SidebarSearch({ user, setEvents }) {
  const [searchCity, setSearchCity] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [mask, setMask] = useState("");
  const [vaccine, setVaccine] = useState("");
  const [category, setCategory] = useState("");

  const format = () => {
    if (selectedDate) {
      const month = new Date(selectedDate).getMonth() + 1;
      const date = new Date(selectedDate).getDate();
      const year = new Date(selectedDate).getFullYear();
      const finalDate = date > 10 ? `${date}` : `0${date}`;
      const finalMonth = month > 10 ? `${month}` : `0${month}`;
      const fullTime = `${year}-${finalMonth}-${finalDate}`;
      return fullTime;
    }
    return "";
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .get(
        `api/events?searchCity=${searchCity}&selectedDate=${format()}&mask=${mask}&vaccine=${vaccine}&category=${category}`
      )
      .then((response) => {
        console.log(response.data);
        setEvents(response.data.events);
      });
  };

  const onCancel = () => {
    setSearchCity("");
    setSelectedDate("");
    setCategory("");
    setVaccine("");
    setMask("");
    axios.get("api/events").then((response) => {
      console.log(response.data);
      setEvents(response.data.events);
    });
  };

  return (
    <>
      <div className="sidebar__container ">
        <div className="sidebar__head">
          <div className="sidebar__preview">
            <img className="sidebar__pic" src={user.avatar} alt="User" />
          </div>
          <div className="sidebar__wrap">
            <div className="sidebar__title">
              Hey<span style={{ color: "#00AF91" }}> Neigbors</span>
            </div>
            {user && <div className="sidebar__text">{user.first_name}</div>}
          </div>
          {/* <button className="sidebar__action">
            <i className="la la-angle-left " />
          </button> */}
        </div>
        <div className="sidebar__inner">
          <div className="sidebar__section">
            <div className="help__head">
              <form className="help__form" action="">
                <div className="help__title title title_xl">
                  Explore Experience
                </div>
                <div className="help__text color-gray">
                  Search the events near you
                </div>
                <div className="field help__field">
                  <div className="field__wrap">
                    <input
                      className="field__input"
                      type="search"
                      value={searchCity}
                      onChange={(e) => setSearchCity(e.target.value)}
                      placeholder="Search By City "
                    />
                    <div className="field__icon">
                      <i className="la la-search " />
                    </div>
                  </div>
                </div>
              </form>
              {/* {searchCity && ( */}
              <div className="filter">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Calendar
                    date={selectedDate}
                    onChange={setSelectedDate}
                    className="date"
                  />
                </MuiPickersUtilsProvider>

                <div className="option_require">
                  <div className="auth__flex">
                    <label className="switch auth__switch">
                      <input
                        className="switch__input"
                        type="checkbox"
                        value={mask}
                        onChange={() => {
                          setMask(!mask);
                        }}
                      />
                      <span className="switch__content">Require Mask</span>
                    </label>
                  </div>
                  <div className="auth__flex vaccined">
                    <label className="switch auth__switch">
                      <input
                        className="switch__input"
                        type="checkbox"
                        value={vaccine}
                        onChange={() => {
                          setVaccine(!vaccine);
                        }}
                      />
                      <span className="switch__content">Require Vaccined</span>
                    </label>
                  </div>
                </div>
              </div>
              {/* )} */}

              {/* action group*/}
              <div className="help__group action-group">
                <button
                  value="2"
                  className="action action_title active"
                  onClick={(e) => setCategory(Number(e.target.value))}
                >
                  Game
                </button>
                <button
                  value="1"
                  className="action action_title"
                  onClick={(e) => setCategory(Number(e.target.value))}
                >
                  Food
                </button>
                <button
                  value="3"
                  className="action action_title"
                  onClick={(e) => setCategory(Number(e.target.value))}
                >
                  Kids
                </button>
                <button
                  value="4"
                  className="action action_title"
                  onClick={(e) => setCategory(Number(e.target.value))}
                >
                  Study
                </button>
                <button
                  value="5"
                  className="action action_title"
                  onClick={(e) => setCategory(Number(e.target.value))}
                >
                  Movie
                </button>
              </div>

              <div className="buttons">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default SidebarSearch;
