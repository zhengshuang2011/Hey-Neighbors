import React from "react";
import "./SidebarSearch.css";
import { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import ExtensionIcon from '@mui/icons-material/Extension';
import SetMealIcon from '@mui/icons-material/SetMeal';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SearchIcon from '@mui/icons-material/Search';
import ToysIcon from '@mui/icons-material/Toys';
import MovieIcon from '@mui/icons-material/Movie';
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import axios from "axios";

function SidebarSearch({ user, setEvents, setFilter }) {
  const [searchCity, setSearchCity] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [mask, setMask] = useState("");
  const [vaccine, setVaccine] = useState("");
  const [category, setCategory] = useState("");
  const [show, setShow] = useState(false);

  // console.log(
  //   "city",
  //   searchCity,
  //   "date",
  //   selectedDate,
  //   "mask",
  //   mask,
  //   "vaccine",
  //   vaccine,
  //   "category_id",
  //   category
  // );
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

  const changeCategoryIdToName = (id) => {
    if (id === 1) {
      return "food";
    }
    if (id === 2) {
      return "game";
    }
    if (id === 3) {
      return "kids";
    }
    if (id === 4) {
      return "study";
    }
    if (id === 5) {
      return "movies";
    }
    return "";
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const filter = {
      city: searchCity,
      date: format(),
      mask: mask,
      vaccine: vaccine,
      category: changeCategoryIdToName(category),
    };

    axios
      .get(
        `api/events?searchCity=${searchCity}&selectedDate=${format()}&mask=${mask}&vaccine=${vaccine}&category=${category}`
      )
      .then((response) => {
        // console.log(response.data);
        setEvents(response.data.events);
        setFilter(filter);
      });
  };

  const onCancel = () => {
    setSearchCity("");
    setSelectedDate("");
    setCategory("");
    setVaccine("");
    setMask("");
    setFilter(null);
    setShow(false);
    axios.get("api/events").then((response) => {
      // console.log(response.data);
      setEvents(response.data.events);
    });
  };

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="sidebar__container ">
        <div className="sidebar__head">
          {user && (
            <div className="sidebar__preview">
              <img className="sidebar__pic" src={user.avatar} alt="User" />
            </div>
          )}
          <div className="sidebar__wrap">
            <div className="sidebar__title">
              Hey<span style={{ color: "#5E81F4" }}> Neighbors</span>
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
                      onClick={handleShow}
                    />
                    <div className="field__icon">
                      <i className="la la-search " />
                    </div>
                  </div>
                </div>
              </form>
              {show && (
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
                          onChange={() => {
                            setMask(!mask);
                          }}
                          checked={mask === true ? true : false}
                        />
                        <span className="switch__content">Require Mask</span>
                      </label>
                    </div>
                    <div className="auth__flex vaccined">
                      <label className="switch auth__switch">
                        <input
                          className="switch__input"
                          type="checkbox"
                          checked={vaccine === true ? true : false}
                          onChange={() => {
                            setVaccine(!vaccine);
                          }}
                        />
                        <span className="switch__content">
                          Require Vaccined
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              )}
              {!show && (
                <div class="empty__preview">
                  <img
                    class="search_image"
                    src="images/search.png"
                    alt="Empty"
                  />
                </div>
              )}

              {/* action group*/}
              <div className="help__group action-group x-scroll">
                <button
                  value="2"
                  className={
                    "action action_title cate cate" + (category === 2 ? " selected" : "")
                  }
                  onClick={(e) => setCategory(Number(e.target.value))}
                >
                  <ExtensionIcon />
                  Game
                </button>
                <button
                  value="1"
                  className={
                    "action action_title cate" + (category === 1 ? " selected" : "")
                  }
                  onClick={(e) => setCategory(Number(e.target.value))}
                >
                  <SetMealIcon />
                  Food
                </button>
                <button
                  value="3"
                  className={
                    "action action_title cate" + (category === 3 ? " selected" : "")
                  }
                  onClick={(e) => setCategory(Number(e.target.value))}
                >
                  <ToysIcon />
                  Kids
                </button>
                <button
                  value="4"
                  className={
                    "action action_title cate" + (category === 4 ? " selected" : "")
                  }
                  onClick={(e) => setCategory(Number(e.target.value))}
                >
                  <MenuBookIcon />
                  Study
                </button>
                <button
                  value="5"
                  className={
                    "action action_title cate" + (category === 5 ? " selected" : "")
                  }
                  onClick={(e) => setCategory(Number(e.target.value))}
                >
                  <MovieIcon />
                  Movie
                </button>
              </div>

              <div className="buttons">
                <button
                  type="button"
                  className="searchbar"
                  onClick={onSubmit}
                >
                  <SearchIcon />
                  Search
                </button>
                <button
                  type="button"
                  className="cancelbar"
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
