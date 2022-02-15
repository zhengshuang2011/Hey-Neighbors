import React from 'react'
import './SidebarSearch.css'
import { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

function SidebarSearch() {
  const [searchInput, setSearchInput] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [mask, setMask] = useState(false);
  const [vaccine, setVaccine] = useState(false);

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
    <>
      <div className="sidebar__container ">
        <div className="sidebar__head">
          <div className="sidebar__preview">
            <img
              className="sidebar__pic"
              src="img/user-2.jpg"
              alt="User"
            />
          </div>
          <div className="sidebar__wrap">
            <div className="sidebar__title">Hey<span style={{ color: '#00AF91' }}> Neigbors</span></div>
            <div className="sidebar__text">Miranda</div>
          </div>
          <button className="sidebar__action">
            <i className="la la-angle-left " />
          </button>
        </div>
        <div className="sidebar__inner">
          <div className="sidebar__section">

            <div className="help__head">
              <form className="help__form" action="">
                <div className="help__title title title_xl">Explore Experience</div>
                <div className="help__text color-gray">
                  Search the events near you
                </div>
                <div className="field help__field">
                  <div className="field__wrap">
                    <input
                      className="field__input"
                      type="search"
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                      placeholder="Search Location "
                    />
                    <div className="field__icon">
                      <i className="la la-search " onClick={onSubmit} />
                    </div>
                  </div>
                </div>
              </form>
              {searchInput && (
                <div className="filter">
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Calendar
                      date={selectedDate}
                      onChange={setSelectedDate}
                      className="date"
                    />
                  </MuiPickersUtilsProvider>

                  <div className="option_require">
                    <div class="auth__flex">
                      <label class="switch auth__switch">
                        <input
                          class="switch__input"
                          type="checkbox"
                          value={mask}
                          onChange={() => {
                            setMask(!mask);
                          }} />
                        <span class="switch__content">Require Mask</span>
                      </label>
                    </div>
                    <div class="auth__flex vaccined">
                      <label class="switch auth__switch">
                        <input
                          class="switch__input"
                          type="checkbox"
                          value={vaccine}
                          onChange={() => {
                            setVaccine(!vaccine);
                          }}
                        />
                        <span class="switch__content">Require Vaccined</span>
                      </label>
                    </div>

                  </div>
                </div>
              )}


              {/* action group*/}
              <div className="help__group action-group">
                <button className="action action_title active">Game</button>
                <button className="action action_title">Food</button>
                <button className="action action_title">Kids</button>
                <button className="action action_title">Study</button>
                <button className="action action_title">Movie</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default SidebarSearch